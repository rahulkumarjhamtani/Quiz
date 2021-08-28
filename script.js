// all questions and answers in the quiz
var quiz = [
    {
        question: 'What is the number of planets in our solar system ?',
        a: '6',
        b: '7',
        c: '8',
        d: '9',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019 ?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Who was the president of US in 2012 ?',
        a: 'George W. Bush',
        b: 'Barack Obama',
        c: 'Donald Trump',
        d: 'Joe Biden',
        correct: 'b'
    },
    {
        question: 'Which of the following is used for concatenation in PHP ?',
        a: '+ (plus)',
        b: '* (Asterisk)',
        c: 'append()',
        d: '. (dot)',
        correct: 'd'
    },
    {
        question: 'What is a bug ?',
        a: 'Computer Virus',
        b: 'Error in Computer Configuration',
        c: 'Error in a Program',
        d: 'None of these',
        correct: 'c'
    }
]

// global variables
var total = document.getElementById('quiz');
var question = document.getElementById('question');
var answers = document.querySelectorAll(".answer");
var score = 0;

var atext = document.getElementById('atext'); 
var btext = document.getElementById('btext'); 
var ctext = document.getElementById('ctext'); 
var dtext = document.getElementById('dtext'); 

var submit = document.getElementById('submit'); 

var curques = 0;

loadquiz();

// load quiz
function loadquiz() {
    noans();
    var curquiz = quiz[curques];
    question.innerText = curquiz.question;
    atext.innerText = curquiz.a;
    btext.innerText = curquiz.b;
    ctext.innerText = curquiz.c;
    dtext.innerText = curquiz.d;

}

// get answer which is selected
function getans() {
    
    let ans = undefined;
    answers.forEach((answer) => {
        if(answer.checked)
        {
            ans = answer.id;
        }
    });
    
    return ans;
}

// no answer is selected
function noans() {
    answers.forEach((answer) => {
        answer.checked = false;
    });
}

submit.addEventListener("click", () => {
    
    var answer = getans();

    if(answer)
    {
        if(answer === quiz[curques].correct)
        {
            score++;
        }
        curques++;

        if(curques < quiz.length)
        {
            loadquiz();
        }
        else
        {
            total.innerHTML = `<h2>Score : ${score} / ${quiz.length}</h2><button onclick="location.reload()">Replay</button>`;
        }
    }
    
});