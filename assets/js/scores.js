var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var finalScore = document.getElementById("final-score");
var mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;

var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

initials.addEventListener("keyup", () => {
    submitbtn.disabled = !initials.value;
})

saveHighScore = e => {
    console.log("Clicked Submit")
    e.preventDefault();

    var score = {
        score: mostRecentScore,
        name: initials.value
    };
    highScores.push(score);
}

