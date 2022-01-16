// click Start button

// timer starts

// present with question

// answer question

// present with another question

// answer question incorrectly

// time subtracted from clock

// all questions answered OR timer reaches 0

// game is over

// save initials and score
// questions will be asked
const Questions = [{
    id: 0,
    q: "In which HTML element do we put JavaScript?",
    a: [{
            text: "<js>",
            correct: false
        },
        {
            text: "<javascript>",
            correct: false
        },
        {
            text: "<script>",
            correct: true
        },
        {
            text: "<scripting>",
            correct: false
        }
    ]
}, {
    id: 1,
    q: "Where is the correct place to insert a  JavaScript?",
    a: [{
            text: "the <body> section",
            correct: false
        },
        {
            text: "the <div> section",
            correct: false
        },
        {
            text: "the <head> section",
            correct: false
        },
        {
            text: "both are the <body> and <head> are correct",
            correct: true
        }
    ]
}, {
    id: 2,
    q: "What is the correct syntax when referring to an external script that is called 'script.js'?",
    a: [{
            text: "<script href='script.js'>",
            correct: false
        },
        {
            text: "<script name='script.js'>",
            correct: false
        },
        {
            text: "<script src='script.js'>",
            correct: true
        },
        {
            text: "<script class='script.js'>",
            correct: false
        }
    ]
}, {
    id: 3,
    q: "How do you create a function on JavaScript?",
    a: [{
            text: "function myFunction()",
            correct: true
        },
        {
            text: "function:myFunction()",
            correct: false
        },
        {
            text: "function = myFunction()",
            correct: false
        },
        {
            text: "function;myFunction()",
            correct: false
        }
    ]
}, {
    id: 4,
    q: "How do you write an IF statement in JavaScript?",
    a: [{
            text: "if i==5 then",
            correct: false
        },
        {
            text: "if i=5",
            correct: false
        },
        {
            text: "if i=5 then",
            correct: false
        },
        {
            text: "if (i==5)",
            correct: true
        }
    ]
}, {
    id: 5,
    q: "How does a WHILE loop begin?",
    a: [{
            text: "while( (i<=10;i++)",
            correct: false
        },
        {
            text: "while i=1 to 10",
            correct: false
        },
        {
            text: "while (i<=10)",
            correct: true
        },
        {
            text: "while (i++)",
            correct: false
        }
    ]
}, {
    id: 6,
    q: "How does a FOR loop begin?",
    a: [{
            text: "for (i=0;i<=5;i++)",
            correct: true
        },
        {
            text: "for (i<=5;i++)",
            correct: false
        },
        {
            text: "for (i=0;I,=5)",
            correct: false
        },
        {
            text: "for i= 1 to 5",
            correct: false
        }
    ]
}, {
    id: 7,
    q: "Which event occurs when the user clicks on HTML element?",
    a: [{
            text: "onchange",
            correct: false
        },
        {
            text: "onmouseover",
            correct: false
        },
        {
            text: "onmouseclick",
            correct: false
        },
        {
            text: "onclick",
            correct: true
        }
    ]
}, {
    id: 8,
    q: "How do you add a comment on JavaScript?",
    a: [{
            text: "//This is a comment",
            correct: true
        },
        {
            text: "<!--This is a comment-->",
            correct: false
        },
        {
            text: "'This is a comment",
            correct: false
        },
        {
            text: "--This is a comment",
            correct: false
        }
    ]
}, {
    id: 9,
    q: "How do you round the number 7.25 to the nearest integer on JavaScript?",
    a: [{
            text: "Math.round(7.25)",
            correct: true
        },
        {
            text: "Math.rnd(7.25)",
            correct: false
        },
        {
            text: "round(7.25)",
            correct: false
        },
        {
            text: "rnd(7.25)",
            correct: false
        }
    ]
}]
var score = 0
var time = 5
var start = true;
// Iterate function displays questions and options based on "id"
function iterate(id) {
    // Getting Result displayed
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting Question
    const question = document.getElementById("question");

    // Setting Question Text
    question.innerText = Questions[id].q;

    // Getting Options
    const op1= document.getElementById('op1');
    const op2= document.getElementById('op2');
    const op3= document.getElementById('op3');
    const op4= document.getElementById('op4');

    // Providing Option Text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing True or False value to options
    op1.value = Questions[id].a[0].correct;
    op2.value = Questions[id].a[1].correct;
    op3.value = Questions[id].a[2].correct;
    op4.value = Questions[id].a[3].correct;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "green";
        op2.style.backgroundColor = "red";
        op3.style.backgroundColor = "red";
        op4.style.backgroundColor = "red";
        // value for option button 
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "red";
        op2.style.backgroundColor = "green";
        op3.style.backgroundColor = "red";
        op4.style.backgroundColor = "red";
        selected = op2.value;
    })

    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "red";
        op2.style.backgroundColor = "red";
        op3.style.backgroundColor = "green";
        op4.style.backgroundColor = "red";
        
        selected = op3.value;
    })

    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "red";
        op2.style.backgroundColor = "red";
        op3.style.backgroundColor = "red";
        op4.style.backgroundColor = "green";

        selected = op4.value;
    })

    // Grabbing evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "blue";

        } else {
            result[0].innerHTML = "False";
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0")
}

//Next button and method
const next = document.getElementsByClassName ('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id <2 ) {
        id++;
        iterate(id);
        console.log(id);
    }
})

const startQuiz = document.getElementById("startbtn");

startQuiz.addEventListener("click",function(){



setInterval(() => {
    document.querySelector(".timer").innerHTML = time
    document.querySelector(".score").innerHTML = score
    if (time === 0){
        time = 0
    }
    else {
        time--
    }
}, 1000)
//generate first question once user presses the start button
}) 


function test(arg) {
    // console.log(arg)
    if (arg == true) {
        console.log("correct")
        score += time
    } else {
        console.log("incorrect")
        time -= 5
    }
}

console.log(document.querySelector(".option-container").children[0])

//for (let i = 0; i <= 3; i++) {

    //document.querySelector(".option-container").children[i].innerHTML = i

    //document.querySelector(".option-container").children[i].setAttribute("onclick", `test(${Questions[0].a[i].correct})`)
//}
