document.addEventListener('DOMContentLoaded', () => {
    // 要素の取得
    const prefixSlot = document.getElementById('prefix-slot');
    const rootSlot = document.getElementById('root-slot');
    const suffixSlot = document.getElementById('suffix-slot');
    const prefixMeaning = document.getElementById('prefix-meaning');
    const rootMeaning = document.getElementById('root-meaning');
    const suffixMeaning = document.getElementById('suffix-meaning');
    const prefixToggle = document.getElementById('prefix-toggle');
    const rootToggle = document.getElementById('root-toggle');
    const suffixToggle = document.getElementById('suffix-toggle');
    const etymologyBtn = document.getElementById('etymology-btn');
    const answerBtn = document.getElementById('answer-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const etymologyDisplay = document.getElementById('etymology-display');
    const answerDisplay = document.getElementById('answer-display');
    const messageDisplay = document.getElementById('message-display');
    const prefixLock = document.getElementById('prefix-lock');
    const rootLock = document.getElementById('root-lock');
    const suffixLock = document.getElementById('suffix-lock');

    // 状態変数
    let isPrefixLocked = false;
    let isRootLocked = false;
    let isSuffixLocked = false;
    let selectedPrefix = 'none';
    let selectedRoot = 'none';
    let selectedSuffix = 'none';

    function populateSlot(slotElement, items, type) {
        slotElement.innerHTML = '';
        Object.keys(items).forEach(key => {
            const item = document.createElement('div');
            item.className = 'slot-item';
            item.textContent = key === 'none' ? '(なし)' : key;
            item.dataset.key = key;
            if (key === 'none') { item.classList.add('selected'); }
            item.addEventListener('click', () => { selectItem(type, item); });
            slotElement.appendChild(item);
        });
    }

    function selectItem(type, selectedElement) {
        clearResult();
        const slotElement = selectedElement.parentElement;
        slotElement.querySelectorAll('.slot-item').forEach(item => item.classList.remove('selected'));
        selectedElement.classList.add('selected');
        
        const key = selectedElement.dataset.key;
        if (type === 'prefix') {
            selectedPrefix = key;
            prefixMeaning.textContent = data.prefixes[key].meaning;
        } else if (type === 'root') {
            selectedRoot = key;
            rootMeaning.textContent = data.roots[key].meaning;
        } else if (type === 'suffix') {
            selectedSuffix = key;
            suffixMeaning.textContent = data.suffixes[key].meaning;
        }
    }

    function findWord(p, r, s) {
        return data.words.find(word => word.prefix === p && word.root === r && word.suffix === s);
    }
    
    function clearResult() {
        etymologyDisplay.textContent = '';
        answerDisplay.textContent = '';
        messageDisplay.textContent = '';
        etymologyBtn.style.display = 'inline-block';
        answerBtn.style.display = 'none';
    }

    function showEtymology() {
        etymologyDisplay.textContent = '';
        answerDisplay.textContent = '';
        messageDisplay.textContent = '';
        const p = prefixToggle.checked ? selectedPrefix : 'none';
        const r = rootToggle.checked ? selectedRoot : 'none';
        const s = suffixToggle.checked ? selectedSuffix : 'none';
        const foundWord = findWord(p, r, s);
        if (foundWord) {
            etymologyDisplay.textContent = `[語源] ${foundWord.etymology}`;
            etymologyBtn.style.display = 'none';
            answerBtn.style.display = 'inline-block';
        } else {
            messageDisplay.textContent = 'この組み合わせの英単語はデータに存在しません。';
        }
    }

    function showAnswer() {
        const p = prefixToggle.checked ? selectedPrefix : 'none';
        const r = rootToggle.checked ? selectedRoot : 'none';
        const s = suffixToggle.checked ? selectedSuffix : 'none';
        const foundWord = findWord(p, r, s);
        if (foundWord) {
            answerDisplay.textContent = `${foundWord.word} - ${foundWord.meaning}`;
        }
    }
    
    function shuffle() {
        clearResult();
        const possibleWords = data.words.filter(word => {
            const prefixMatch = !isPrefixLocked || word.prefix === selectedPrefix;
            const rootMatch = !isRootLocked || word.root === selectedRoot;
            const suffixMatch = !isSuffixLocked || word.suffix === selectedSuffix;
            return prefixMatch && rootMatch && suffixMatch;
        });

        if (possibleWords.length === 0) {
            messageDisplay.textContent = 'この組み合わせに合う単語はありません。ロックを解除してください。';
            return;
        }
        const randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];

        if (!isPrefixLocked) { updateSlot('prefix', randomWord.prefix); }
        if (!isRootLocked) { updateSlot('root', randomWord.root); }
        if (!isSuffixLocked) { updateSlot('suffix', randomWord.suffix); }
    }

    function updateSlot(type, key) {
        let slotElement, toggleElement;
        if (type === 'prefix') {
            slotElement = prefixSlot;
            toggleElement = prefixToggle;
        } else if (type === 'root') {
            slotElement = rootSlot;
            toggleElement = rootToggle;
        } else {
            slotElement = suffixSlot;
            toggleElement = suffixToggle;
        }
        toggleElement.checked = (key !== 'none');
        toggleSlotUI(toggleElement, slotElement.parentElement, type);
        const targetItem = slotElement.querySelector(`[data-key="${key}"]`);
        if (targetItem) {
            selectItem(type, targetItem);
            targetItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function toggleSlotUI(toggle, wrapper, type) {
        if (toggle.checked) {
            wrapper.classList.remove('disabled');
        } else {
            wrapper.classList.add('disabled');
            const noneItem = wrapper.querySelector('[data-key="none"]');
            if(noneItem) { selectItem(type, noneItem); }
        }
        clearResult();
    }

    function toggleLock(type) {
        if (type === 'prefix') {
            isPrefixLocked = !isPrefixLocked;
            prefixLock.textContent = isPrefixLocked ? '🔒' : '🔓';
            prefixLock.classList.toggle('locked', isPrefixLocked);
        } else if (type === 'root') {
            isRootLocked = !isRootLocked;
            rootLock.textContent = isRootLocked ? '🔒' : '🔓';
            rootLock.classList.toggle('locked', isRootLocked);
        } else if (type === 'suffix') {
            isSuffixLocked = !isSuffixLocked;
            suffixLock.textContent = isSuffixLocked ? '🔒' : '🔓';
            suffixLock.classList.toggle('locked', isSuffixLocked);
        }
    }

    // --- 初期化処理 ---
    populateSlot(prefixSlot, data.prefixes, 'prefix');
    populateSlot(rootSlot, data.roots, 'root');
    populateSlot(suffixSlot, data.suffixes, 'suffix');
    prefixMeaning.textContent = data.prefixes['none'].meaning;
    rootMeaning.textContent = data.roots['none'].meaning;
    suffixMeaning.textContent = data.suffixes['none'].meaning;
    answerBtn.style.display = 'none';

    // --- イベントリスナーの設定 ---
    etymologyBtn.addEventListener('click', showEtymology);
    answerBtn.addEventListener('click', showAnswer);
    shuffleBtn.addEventListener('click', shuffle);
    prefixToggle.addEventListener('change', () => toggleSlotUI(prefixToggle, prefixSlot.parentElement, 'prefix'));
    rootToggle.addEventListener('change', () => toggleSlotUI(rootToggle, rootSlot.parentElement, 'root'));
    suffixToggle.addEventListener('change', () => toggleSlotUI(suffixToggle, suffixSlot.parentElement, 'suffix'));
    
    prefixLock.addEventListener('click', () => toggleLock('prefix'));
    rootLock.addEventListener('click', () => toggleLock('root'));
    suffixLock.addEventListener('click', () => toggleLock('suffix'));
});