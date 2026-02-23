document.addEventListener('DOMContentLoaded', () => {
    const tableHeader = document.getElementById('table-header');
    const tableBody = document.getElementById('table-body');
    const toggleAllBtn = document.getElementById('toggle-all-btn');
    const randomQuizBtn = document.getElementById('random-quiz-btn');
    const quizOverlay = document.getElementById('quiz-overlay');
    const quizCard = document.getElementById('quiz-card');
    const quizQuestion = document.getElementById('quiz-question');
    const quizAnswerContainer = document.getElementById('quiz-answer-container');
    const quizAnswer = document.getElementById('quiz-answer');
    const closeQuizBtn = document.getElementById('close-quiz-btn');

    let allRevealed = false;

    // Generate Table Header (Merged eras)
    displayEras.forEach(eraName => {
        const th = document.createElement('th');
        th.textContent = eraName;
        th.colSpan = 2;
        tableHeader.appendChild(th);
    });

    // Generate Table Body
    Object.keys(regions).forEach(regionKey => {
        const row = document.createElement('tr');
        
        // Region label cell (Sticky column)
        const labelTd = document.createElement('td');
        labelTd.className = 'sticky-col';
        const span = document.createElement('span');
        span.className = 'region-label';
        span.textContent = regions[regionKey].name;
        span.style.borderLeftColor = regions[regionKey].color;
        labelTd.appendChild(span);
        row.appendChild(labelTd);

        // Era cells (42 elements)
        const regionData = historyData[regionKey] || [];
        for (let i = 0; i < 42; i++) {
            const td = document.createElement('td');
            const rawData = regionData[i];

            if (rawData) {
                // "Event (Detail)" -> Table shows only "Event"
                const displayEvent = rawData.split(' (')[0];
                const card = document.createElement('div');
                card.className = 'history-card';
                card.innerHTML = `<div class="answer-text">${displayEvent}</div>`;
                card.addEventListener('click', (e) => {
                    card.classList.toggle('revealed');
                });
                td.appendChild(card);
            } else {
                const card = document.createElement('div');
                card.className = 'history-card empty';
                td.appendChild(card);
            }
            row.appendChild(td);
        }

        tableBody.appendChild(row);
    });

    // Toggle All functionality
    toggleAllBtn.addEventListener('click', () => {
        allRevealed = !allRevealed;
        const cards = document.querySelectorAll('.history-card:not(.empty)');
        cards.forEach(card => {
            if (allRevealed) card.classList.add('revealed');
            else card.classList.remove('revealed');
        });
        toggleAllBtn.textContent = allRevealed ? '◉' : '◯';
    });

    // Random Quiz Logic
    let quizList = [];

    function prepareQuizList() {
        quizList = [];
        Object.keys(historyData).forEach(regionKey => {
            const regionData = historyData[regionKey];
            regionData.forEach((rawData, index) => {
                if (rawData) {
                    const centuryIndex = Math.floor(index / 2);
                    const isLate = index % 2 === 1;
                    const eraName = displayEras[centuryIndex] + (isLate ? "　後半" : "　前半");
                    
                    quizList.push({
                        eraName: eraName,
                        regionName: regions[regionKey].name,
                        regionColor: regions[regionKey].color,
                        fullEvent: rawData
                    });
                }
            });
        });
    }

    function pickRandomQuiz() {
        if (quizList.length === 0) prepareQuizList();
        if (quizList.length === 0) return null;
        const index = Math.floor(Math.random() * quizList.length);
        return quizList[index];
    }

    function startNewQuiz() {
        const quizData = pickRandomQuiz();
        if (!quizData) return;
        
        quizQuestion.textContent = `${quizData.eraName}　${quizData.regionName}`;
        
        const formattedAnswer = quizData.fullEvent.replace(' (', '<br>(');
        quizAnswer.innerHTML = formattedAnswer;
        
        quizAnswerContainer.classList.add('hidden');
        quizCard.style.borderColor = quizData.regionColor;
    }

    randomQuizBtn.addEventListener('click', () => {
        startNewQuiz();
        quizOverlay.classList.remove('hidden');
    });

    quizCard.addEventListener('click', () => {
        if (quizAnswerContainer.classList.contains('hidden')) {
            quizAnswerContainer.classList.remove('hidden');
        } else {
            startNewQuiz();
        }
    });

    closeQuizBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        quizOverlay.classList.add('hidden');
    });
});
