
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

function checkAns(event){
    console.log(event.target);
    console.log(questions[2][1]);

    chosenAnswer = event.target.dataset.answer;
    answerSelected = 1;
    
    if (chosenAnswer == questions[answerIndex][1]) {
        feedback.innerHTML = "Correct!";
        answerIndex++;
        if(answerIndex<=answers.length&&timeLeft>0){
            printQuestion(answerIndex);
        }
        else{
            //end
        }
    }

    else {
        feedback.innerHTML = "Incorrect, try again!";
        timeLeft = timeLeft - 3;
        if(timeLeft<=0){
            //end
        }
    }
}

function printQuestion(){
    
        question.innerHTML=questions[answerIndex][0]; 
        a1.innerHTML=questions[answerIndex][2][0];
        a2.innerHTML=questions[answerIndex][2][1];
        a3.innerHTML=questions[answerIndex][2][2];
        a4.innerHTML=questions[answerIndex][2][3];
}

function Setupgame(event) {
    console.log(event.target);
    timer();
    answerIndex = 0;
    
    var questionEl = document.querySelector(".startScreen");
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
    printQuestion(answerIndex);
   // while (timeLeft >= 0) {
     /*   if (answerSelected == 1) {
            if (chosenAnswer == questions[answerIndex][1]) {
                feedback.innerHTML = "Correct!";
                correct = 1;
                printQuestion(answerIndex++);
            }

            else {
                feedback.innerHTML = "Incorrect, try again!";
                timeLeft = timeLeft - 3;
            }
            answerSelected = 0;
        }*/
   // }
}

console.log(questions);

document.querySelector(".startScreen").style.display = "block";
document.getElementById("quiz").style.display = "none";
startButton.addEventListener("click", Setupgame);
a1.addEventListener("click", checkAns);
a2.addEventListener("click", checkAns);
a3.addEventListener("click", checkAns);
a4.addEventListener("click", checkAns);

