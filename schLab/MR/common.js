let incorrectAnswers = []; // 間違えた問題とその正しい回答を格納する配列
const totalQuestions = Math.min(10, questions.length); // 最大10問、または作成した問題数以下
let askedQuestions = []; // 出題済みの質問を格納する配列

// ランダムに質問を表示する関数
function displayQuestion() {
if (askedQuestions.length < totalQuestions) {
let randomIndex;
do {
randomIndex = Math.floor(Math.random() * questions.length);
} while (askedQuestions.includes(randomIndex)); // 出題済みチェック

askedQuestions.push(randomIndex); // 新しく出題した質問を記録
const questionData = questions[randomIndex];
const questionArea = document.getElementById('questionArea');

// 問題と選択肢を表示
questionArea.innerHTML = `
<h3>【 ${askedQuestions.length} 】${questionData.question}</h3>
${questionData.options.map(option => `
<label>
<input type="${questionData.type === 'check' ? 'checkbox' : 'radio'}" name="answer" value="${option}"> ${option}
</label><br>
`).join('')}
`;
} else {
displayResults();
}
}

// 回答をチェックする関数
function checkAnswers() {
const selectedAnswers = Array.from(document.querySelectorAll(`input[name="answer"]:checked`)).map(checkbox => checkbox.value);
const questionIndex = askedQuestions[askedQuestions.length - 1]; // 最後の出題した質問を取得
const questionData = questions[questionIndex];

// 正解を確認
const isCorrect = selectedAnswers.length === questionData.correct.length &&
questionData.correct.every(answer => selectedAnswers.includes(answer));

// 間違えた問題を記録
if (!isCorrect) {
incorrectAnswers.push({
question: questionData.question,
correctAnswers: questionData.correct
});
}

const message = isCorrect ? `【 ${askedQuestions.length} 】 ⭕️` : `【 ${askedQuestions.length} 】 ❌️　${questionData.correct.join(', ')}`;
document.getElementById('result').innerText = message;

// 次の質問へ移動
displayQuestion();
}

// 結果を表示する関数
function displayResults() {
document.getElementById('questionArea').innerHTML = "";

// 間違えた問題の表示
if (incorrectAnswers.length > 0) {
const incorrectList = incorrectAnswers.map(item => `
<li><br>${item.question}<br><u>${item.correctAnswers.join(', ')}</u></li><br>
`).join('');
document.getElementById('questionArea').innerHTML += `<div style="width: 100%; text-align: center; font-size: calc(100dvh / 6);"><span>終了</span></div><br><br><span><strong>間違えた問題:</strong><ul>${incorrectList}</ul></span>`;
} else {
document.getElementById('questionArea').innerHTML += `<br><br><div style="width: 100%; text-align: center; font-size: calc(100dvh / 6);"><span>全問<br>正解</span></div>`;
}

document.getElementById('submitAnswer').style.display = 'none';
document.getElementById('retryButton').style.display = 'block'; // 再挑戦ボタンを表示
}

// クイズを再スタートする関数
function restartQuiz() {
askedQuestions = []; // 出題済みの質問をリセット
incorrectAnswers = []; // 間違えた問題のリストをリセット
document.getElementById('result').innerText = "";
document.getElementById('retryButton').style.display = 'none'; // 再挑戦ボタンを非表示
displayQuestion();
document.getElementById('submitAnswer').style.display = 'block'; // 提出ボタンを再表示
}

// 最初の質問を表示
displayQuestion();

document.getElementById('submitAnswer').addEventListener('click', function() {
const scrollableDiv = document.getElementById('questionArea');
scrollableDiv.scrollTop = 0;
});
document.getElementById('retryButton').addEventListener('click', function() {
const scrollableDiv = document.getElementById('questionArea');
scrollableDiv.scrollTop = 0;
});