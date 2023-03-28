var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

var scoreText = document.getElementsByClassName("scores");



var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [ 
{
    question: "Commonly used data types DO NOT include:",
    choice1: "1. strings", 
    choice2: "2. booleans",
    choice3: "3. alerts",
    choice4: "4. numbers",
    answer: 3,
},
{
    question: "The condition in an if / else statement is enclosed within _____.",
    choice1: "1. quotes",
    choice2: "2. curly brackets",
    choice3: "3. parentheses",
    choice4: "4. square brackets",
    answer: 2,
},
{
    question: "Arrays in JavaScript can be used to store _____.",
    choice1: "1. numbers and strings",
    choice2: "2. other arrays",
    choice3: "3. booleans",
    choice4: "4. all of the above",
    answer: 4,
},
{
    question: "String values must be enclosed within ____ when being assigned to variables.",
    choice1: "1. commas",
    choice2: "2. curly brackets",
    choice3: "3. quotes",
    choice4: "4. parentheses",
    answer: 3,
},
{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "1. JavaScript",
    choice2: "2.terminal/bash",
    choice3: "3. for loops",
    choice4: "4. console.log",
    answer: 4,
},
];

var correctBonus = 10;
var maxQuestions = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    nextQuestion();
};

nextQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }
    questionCounter++;
    // questionCounterText.innerText = "questionCounter + "/" + maxQuestions";
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;


    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset['number'];

        var classToApply = 'incorrect';
            if (selectedAnswer == currentQuestion.answer) {
                classToApply = 'correct';
            }
            if(classToApply === 'correct') {
                incrementScore(correctBonus);
            }
        console.log(classToApply);

        selectedChoice.parentElement.classList.add(classToApply);

            setTimeout(() => {
                selectedChoice.parentElement.classList.remove(classToApply);
                nextQuestion();
            }, 1000)    
    
    });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}
startGame();
