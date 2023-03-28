var initials = document.getElementById("initials");
var submit = document.getElementById("submit");
var finalScore = document.getElementById("final-score");
var mostRecentScore = localStorage.getItem("mostRecentScore");



finalScore.innerText = mostRecentScore;

var highScores = JSON.parse(localStorage.getItem("highscores")) || [];

initials.addEventListener("keyup", () => {
    submit.disabled = !initials.value;
})

saveHighScore = e => {
    console.log("Clicked Submit")
    e.preventDefault();

    var score = {
        score: Math.floor(Math.random() * 100), 
        name: initials.value
    };
    highScores.push(score);

    highScores.sort( (a,b) => b.score - a.score)

    highScores.splice(5);

    localStorage.setItem("highscores", JSON.stringify(highScores));
    window.location.assign("/");

    console.log(highScores);
}


