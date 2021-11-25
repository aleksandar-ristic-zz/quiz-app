// variables
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

// because its an object, we take and parse items but if
// none are in storage, create an empty array instead
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// so we know how many high scores we can have stored :
MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

// event handlers
username.addEventListener('keyup', () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

// functions
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);

    // so the biggest is first
    highScores.sort( (a,b) => b.score - a.score);

    // keep highScores at 5 places
    highScores.splice(MAX_HIGH_SCORES);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/');
}