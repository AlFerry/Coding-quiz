//Define global variables that will either get feedback from or write to html elements
var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector(".timer-count");
var question = document.querySelector("#questionText");
var a1 = document.querySelector("#answer1");
var a2 = document.querySelector("#answer2");
var a3 = document.querySelector("#answer3");
var a4 = document.querySelector("#answer4");
var feedback = document.querySelector("#response");
var scoreEl = document.querySelector("#currentScore");
var highScores = document.querySelector("#seeScores");

//Define global variables with null or starting values
var timeLeft = 60;
var answerSelected = 0;
var chosenAnswer;
var playerID;
var score = 0;

//Populates high scores page from array stored in local storage
function populateHighScores(){
    var allScores=JSON.parse(localStorage.getItem("scoreArray"));
    var c1=document.querySelector("#col1");
    var c2=document.querySelector("#col2");
    var c3=document.querySelector("#col3");
    c1.innerHTML="Rank <br><br>";
    c2.innerHTML="Player <br><br>";
    c3.innerHTML="Score <br><br>"
    var i;
    var limit = 10;
    if (allScores.length < limit){
        limit=allScores.length;
    }
    for(i=0; i<limit; i++){
        var currentEntry = allScores[i];
        c1.innerHTML += i+1+".<br>";
        c2.innerHTML += currentEntry["initials"] +"<br>";
        c3.innerHTML += currentEntry["score"] +"<br>";
    }
}

//Updates array of high scores stored in local storage with current score
function updateHighScores(){
    var playerID=prompt("GAME OVER! Please enter your initials to store your score of "+score+":", "");
    var existingScores = JSON.parse(localStorage.getItem("scoreArray"));
    if(existingScores == null) existingScores = [];
    var entry ={
        "initials": playerID,
        "score": score
    };
    localStorage.setItem("entry", JSON.stringify(entry));
    existingScores.push(entry);
    existingScores.sort(function(a,b){return b["score"]-a["score"]});
    localStorage.setItem("scoreArray", JSON.stringify(existingScores));
    console.log(JSON.parse(localStorage.getItem("scoreArray")));
    showHighScores();
}

//Shows high score list
function showHighScores(){
    populateHighScores();
    var startBox = document.querySelector(".startScreen");
    var quizEl = document.getElementById("quiz");
    var scoreboard = document.querySelector(".scoreScreen");

    startBox.style.display = "none";
    quizEl.style.display = "none";
    scoreboard.style.display = "block";

}

//A nested array containing quiz question and answers
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
    [
        "Which of the following is not a semantic HTML element?",
        2,
        ["footer", "main", "div", "title"]
    ],
    [
        "What tag should a developer add to a displayed image to increase site accessibilty?",
        1,
        ["span", "alt", "title", "img"]
    ],
    [
        "What does www stand for?",
        2,
        ["Wide world wings", "Welsh world war", "World wide web", "Whiny weasels waltzing"]
    ],
]

//Function to iterate timer to count down and end game.
function timer(){
    
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if(timeLeft <= 0) {
        // Stops timer
        clearInterval(timerInterval);
        updateHighScores();
        
        }

    }, 1000);
}

//Checks answer when one is selected.
function checkAns(event){
    
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
            scoreEl.textContent = score;
            timeLeft=1;
        }
    }

    else {
        feedback.innerHTML = "Incorrect, try again!";
        timeLeft = timeLeft - 3;
    }
}

//Prints questions and answers to quiz page
function printQuestion(){
    
        question.innerHTML=questions[answerIndex][0]; 
        a1.innerHTML=questions[answerIndex][2][0];
        a2.innerHTML=questions[answerIndex][2][1];
        a3.innerHTML=questions[answerIndex][2][2];
        a4.innerHTML=questions[answerIndex][2][3];
        scoreEl.textContent = score;
}

//Hides start screen and shows quiz, starts timer and the rest of quiz
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


//Initiate starting display styles
document.querySelector(".startScreen").style.display = "block";
document.getElementById("quiz").style.display = "none";
document.querySelector(".scoreScreen").style.display = "none";

//Add event listeners for all buttons
startButton.addEventListener("click", Setupgame);
a1.addEventListener("click", checkAns);
a2.addEventListener("click", checkAns);
a3.addEventListener("click", checkAns);
a4.addEventListener("click", checkAns);
highScores.addEventListener("click", showHighScores);

