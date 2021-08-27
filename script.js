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
        c: 'Error in a Programme',
        d: 'None of these',
        correct: 'c'
    }
]

var question = document.getElementById('question');
var score = 0;

var atext = document.getElementById('atext'); 
var btext = document.getElementById('btext'); 
var ctext = document.getElementById('ctext'); 
var dtext = document.getElementById('dtext'); 

var submit = document.getElementById('submit'); 

var curques = 0;

loadquiz();

function loadquiz() {
    var curquiz = quiz[curques];
    question.innerText = curquiz.question;
    atext.innerText = curquiz.a;
    btext.innerText = curquiz.b;
    ctext.innerText = curquiz.c;
    dtext.innerText = curquiz.d;

}

function getans() {
    var answers = document.querySelectorAll(".answer");

    let ans = undefined;
    answers.forEach((answer) => {
        if(answer.checked)
        {
            ans = answer.id;
        }
    });
    
    return ans;
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
            alert('Quiz Completed');
        }
    }


    
});