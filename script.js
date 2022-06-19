const quizData = [
    {
        question: 'Какой сейчас год?',
        a: '2014',
        b: '2016',
        c: '2022',
        d: '2020',
        correct: 'c',
    },
    {
        question: 'На каком языке написана эта программа?',
        a: 'PHP',
        b: 'JavaScript',
        c: 'Java',
        d: 'C++',
        correct: 'b',
    },
    {
        question: 'В каком году затонул Титаник?',
        a: '1912',
        b: '1894',
        c: '1931',
        d: '1920',
        correct: 'a',
    },
    {
        question: 'Что означает аббревиатура HTML?',
        a: 'Cascading Style Sheet',
        b: 'Jason Object Notation',
        c: 'Helicopters Terminals Motorboats Lamborginis',
        d: 'Hypertext Markup Language',
        correct: 'd', 
    },
    {
        question: 'В каком году крестили Русь?',
        a: '1120',
        b: '560 век до нашей эры',
        c: '988',
        d: '0',
        correct: 'c',
    }
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    })
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    console.log(answer)
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Вы ответили правильно на: ${score} вопросов из ${quizData.length}</h2>
            <button onClick="location.reload()">Перезапустить</button>`
        }
    }
});