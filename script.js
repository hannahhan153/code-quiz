// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

const isStorage = 'undefined' !== typeof localStorage;
// create questions
let questions = [{
    question: "1. In which HTML element do we put JavaScript?",
    imgSrc: "images/js.png",
    choiceA: "the js element",
    choiceB: "the javascript element",
    choiceC: "the script element",
    correct: "C"
}, {
    question: "2. Where is the correct place to insert a  JavaScript?",
    imgSrc: "images/js.png",
    choiceA: "the body section",
    choiceB: "the head section",
    choiceC: "both are the body and head are correct",
    correct: "C"
}, {
    question: "3. What is the script element we use when referring to an external script that is called 'script.js'?",
    imgSrc: "images/js.png",
    choiceA: "script href",
    choiceB: "script src",
    choiceC: "script name",
    correct: "B"
}, {
    question: "4. How do you create a function on JavaScript?",
    imgSrc: "images/js.png",
    choiceA: "function myFunction()",
    choiceB: ":myFunction()",
    choiceC: "function = myFunction()",
    correct: "A"
}, {
    question: "5. How do you write an IF statement in JavaScript?",
    imgSrc: "images/js.png",
    choiceA: "if i==5 then",
    choiceB: "if i=5",
    choiceC: "if (i==5)",
    correct: "C"
}, {
    question: "6. How does a WHILE loop begin?",
    imgSrc: "images/js.png",
    choiceA: "while( (i<=10;i++)",
    choiceB: "while i=1 to 10",
    choiceC: "while (i<=10)",
    correct: "C"
}, {
    question: "7. How does a FOR loop begin?",
    imgSrc: "images/js.png",
    choiceA: "for (i=0;i<=5;i++)",
    choiceB: "for (i<=5;i++)",
    choiceC: "for (i=0;I,=5)",
    correct: "A"
}, {
    question: "8. Which event occurs when the user clicks on HTML element?",
    imgSrc: "images/js.png",
    choiceA: "onchange",
    choiceB: "onmouseover",
    choiceC: "onclick",
    correct: "C"
}, {
    question: "9. How do you add a comment on JavaScript?",
    imgSrc: "images/js.png",
    choiceA: "//This is a comment",
    choiceB: "(This is a comment)",
    choiceC: "'This is a comment",
    correct: "A"
}, {
    question: "10. How do you round the number 7.25 to the nearest integer on JavaScript?",
    imgSrc: "images/js.png",
    choiceA: "round(7.25)",
    choiceB: "rnd(7.25)",
    choiceC: "Math.round(7.25)",
    correct: "C"
}];

// variable of the last question with index of last question
const lastQuestion = questions.length - 1;
// variable of first question with index of 0 
let firstQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// function to return a question
function returnQuestion() {
    let q = questions[firstQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}
// when page loads, user must click on "Start Quiz" to begin the quiz
start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    // hide the StartQuiz button
    start.style.display = "none";
    // will return question
    returnQuestion();
    // will display quiz block because set it to "none" on html
    quiz.style.display = "block";
    returnProgress();
    returnCounter();
    TIMER = setInterval(returnCounter, 1000); // 1000ms = 1s
}

// return progress
function returnProgress() {

    for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

// counter return
function returnCounter() {
    if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    } else {
        count = 0;
        // change progress color to red
        answerIsWrong();
        if (firstQuestion < lastQuestion) {
            firstQuestion++;
            returnQuestion();
        } else {
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer) {
    if (answer == questions[firstQuestion].correct) {
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    } else {
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if (firstQuestion < lastQuestion) {
        firstQuestion++;
        returnQuestion();
    } else {
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect() {
    document.getElementById(firstQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
    document.getElementById(firstQuestion).style.backgroundColor = "#f00";
}

// score return
function scoreRender() {
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score / questions.length);

    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "images/5.png" :
        (scorePerCent >= 60) ? "images/4.png" :
        (scorePerCent >= 40) ? "images/3.png" :
        (scorePerCent >= 20) ? "images/2.png" :
        "images/1.png";

    scoreDiv.innerHTML = "<img src=" + img + ">";
    scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}






// answer question incorrectly

// time subtracted from clock

// all questions answered OR timer reaches 0

// game is over

// save initials and score