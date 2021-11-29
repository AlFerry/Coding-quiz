
var startButton = document.querySelector("#start-button");
var timerEl = document.querySelector(".timer-count");
var timeLeft = 60;

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
]

function timer(){
    
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft;

        if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image\\
        alert("Game over!");
        }

    }, 1000);
}

function game(){
    timer();
    var questionEl=document.querySelector(".question");
    var quizEl = document.getElementById("quiz");
    if (quizEl.style.display === "none") {
        quizEl.style.display = "block";
      } else {
        quizEl.style.display = "none";
      }
    if (questionEl.style.display === "none") {
        questionEl.style.display = "block";
    } else {
        questionEl.style.display = "none";
    }  
    
}

console.log(questions);

document.querySelector(".question").style.display = "block";
document.getElementById("quiz").style.display = "none";
startButton.addEventListener("click", game);
