
var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector(".timer-count");
var timeLeft = 60;
var question = document.querySelector("#questionText");
var a1 = document.querySelector("#answer1");
var a2 = document.querySelector("#answer2");
var a3 = document.querySelector("#answer3");
var a4 = document.querySelector("#answer4");
var feedback = document.querySelector("#response");
var answerSelected = 0;
var chosenAnswer;
var playerID;
var scoreEl = document.querySelector("#currentScore");
var score = 0;


var highScores = document.querySelector("#highScores");
//highScores.textContent = scoreArray;

function updateHighScores(){
    var playerID=prompt("GAME OVER! </br> Please enter your initials to store your score:", "");
    var existingScores = JSON.parse(localStorage.getItem("scoreArray"));
    if(existingScores == null) existingScores = [];
    var entry ={
        "initials": playerID,
        "score": score
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    existingScores.push(entry);
    localStorage.setItem("scoreArray", JSON.stringify(existingScores));
    console.log(JSON.parse(localStorage.getItem("scoreArray")));
    }

/*function showHighScores(){
    

}*/

var questions = [
    [
        "Which of the following is NOT a JavaScript data type?", 
        3,
        ["String", "Number", "Boolean", "Character"]
    ],
    [
        "What command will navigate you to the parent folder of your current work location?",
        0,
        ["cd ..", "cd .", "cd/", "mkdir"]
    ],
    [
        "How do you create a new directory from your command line?",
        0,
        ["mkdir", "git clone", "clear", "touch"]
    ],
    [
        "In what kind of variable could the word 'potato' be stored?",
        1,
        ["Boolean", "string", "number", "none"]
    ],
    [
        "What does DOM stand for?",
        3,
        ["Dads On Mountains", "Document Order Maker", "Different Object Model", "Document Object Model"]
    ],
    [
        "What is jQuery?",
        3,
        ["A type of variable", "A Pokemon", "A built-in function", "A third-party API"]
    ],
    [
        "What is the window object?",
        1,
        ["A text input box", "The browser window", "The console", "A pane of glass"]
    ],
]

function timer(){
    
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        updateHighScores();
        
        }

    }, 1000);
}

function checkAns(event){
    console.log(event.target);
    console.log(questions[2][1]);
    
    chosenAnswer = event.target.dataset.answer;
    answerSelected = 1;
    
    if (chosenAnswer == questions[answerIndex][1]) {
        feedback.innerHTML = "Correct!";
        answerIndex++;
        score=score + 5;
        if(answerIndex<questions.length){
            printQuestion(answerIndex);
        }
        else{
            score=score+timeLeft;
            updateHighScores();
        }
    }

    else {
        feedback.innerHTML = "Incorrect, try again!";
        timeLeft = timeLeft - 3;
    }
}

function printQuestion(){
    
        question.innerHTML=questions[answerIndex][0]; 
        a1.innerHTML=questions[answerIndex][2][0];
        a2.innerHTML=questions[answerIndex][2][1];
        a3.innerHTML=questions[answerIndex][2][2];
        a4.innerHTML=questions[answerIndex][2][3];
        scoreEl.textContent = score;
}

function Setupgame(event) {
    console.log(event.target);
    timer();
    answerIndex = 0;
    
    var startBox = document.querySelector(".startScreen");
    var quizEl = document.getElementById("quiz");
    if (quizEl.style.display === "none") {
        quizEl.style.display = "block";
    } else {
        quizEl.style.display = "none";
    }
    if (startBox.style.display === "none") {
        startBox.style.display = "block";
    } else {
        startBox.style.display = "none";
    }
    printQuestion(answerIndex);

}

console.log(questions);

//object.addEventListener("load", scores);
document.querySelector(".startScreen").style.display = "block";
document.getElementById("quiz").style.display = "none";
document.querySelector(".scoreScreen").style.display = "none";
startButton.addEventListener("click", Setupgame);
a1.addEventListener("click", checkAns);
a2.addEventListener("click", checkAns);
a3.addEventListener("click", checkAns);
a4.addEventListener("click", checkAns);

