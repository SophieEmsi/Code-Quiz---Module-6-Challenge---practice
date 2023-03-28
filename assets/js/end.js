var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var finalScore = document.getElementById("final-score");
var mostRecentScore = localStorage.getItem("mostRecentScore");


var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var MAX_HIGH_SCORES = 5;
console.log(highScores);

finalScore.innerText = mostRecentScore;



initials.addEventListener('keyup', () => {
    console.log(initials.value);
    submit.disabled = !initials.value;
});

saveHighScore = e => {
    console.log("Clicked Submit")
    e.preventDefault();

    var score = {
        score: mostRecentScore,
        name: initials.value,
    };
    highScores.push(score);
    highScores.sort( (a,b) => b.score - a.score);
    highScores.splice(5);
    

    localStorage.setItem('highScores', JSON.stringify(highScores));
    console.log(highScores);
};




