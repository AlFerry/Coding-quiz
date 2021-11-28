

Questions and aswers

    Array list for our series of questions

    Eeach question will an object

    {
        question: "Commonly used data types do not include:".
        multipleChoiceOptions: {
            "string",
            "boolean",
            "alert",
            "number",
        }
    }

-Timer/Score


-Start Action
    -hide welcome
        function hideWelcome(){....}

    -display the next question
        function displayNextQuestion(){...}

    -start the countdown timer
    
-validate the user choice
    -IF the choice is wrong subtract time from timer
-display the next question
-display the answer result
-end the game
    -Stop the timer from counting down (clearInterval)


    //Make array of questions
    //match questions to array of correct answers
    //global variables for time given, penalty seconds, etc

    //event listeners for 
            start button: hides start screen, starts interval, gives first question
            