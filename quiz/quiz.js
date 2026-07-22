// Player stats
let score = 0;
let lives = 5;
let timeLeft = 10;
let timer;

// Questions not yet asked
let remainingQuestions = [...questions];

// HTML elements
const question = document.getElementById("question");
const options = document.getElementById("options");
const scoreText = document.getElementById("score");
const livesText = document.getElementById("lives");
const timerText = document.getElementById("timer");

let currentQuestion;

// Start game
nextQuestion();

function nextQuestion() {

    clearInterval(timer);

    // If no questions left, restart the question pool
    if (remainingQuestions.length === 0) {
        remainingQuestions = [...questions];
    }

    // Pick a random question
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);

    currentQuestion = remainingQuestions[randomIndex];

    // Remove it so it isn't asked again this game
    remainingQuestions.splice(randomIndex, 1);

    question.innerHTML = currentQuestion.question;

    options.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option";

        button.innerHTML = option;

        button.onclick = () => checkAnswer(index);

        options.appendChild(button);

    });

    startTimer();

}

function startTimer() {

    timeLeft = 10;

    timerText.innerHTML = "⏳ " + timeLeft;

    timer = setInterval(() => {

        timeLeft--;

        timerText.innerHTML = "⏳ " + timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            lives--;

            updateLives();

            setTimeout(() => {

                if (lives <= 0) {

                    endGame();

                } else {

                    nextQuestion();

                }

            }, 500);

        }

    }, 1000);

}

function checkAnswer(selected) {

    clearInterval(timer);

    const buttons = document.querySelectorAll(".option");

    buttons.forEach(btn => btn.disabled = true);

    if (selected === currentQuestion.answer) {

        buttons[selected].style.background = "green";
        buttons[selected].style.color = "white";

        score++;
        scoreText.innerHTML = "Score: " + score;

    } else {

        buttons[selected].style.background = "red";
        buttons[selected].style.color = "white";

        buttons[currentQuestion.answer].style.background = "green";
        buttons[currentQuestion.answer].style.color = "white";

        lives--;
        updateLives();

    }

    setTimeout(() => {

        if (lives <= 0) {

            endGame();

        } else {

            nextQuestion();

        }

    }, 700);

}

function loseLife() {

    lives--;

    updateLives();

    if (lives <= 0) {

        endGame();

        return;

    }

    nextQuestion();

}

function updateLives() {

    let hearts = "";

    for (let i = 0; i < lives; i++) {
        hearts += "❤️ ";
    }

    for (let i = lives; i < 5; i++) {
        hearts += "🤍 ";
    }

    livesText.innerHTML = hearts;

}

function endGame() {

    localStorage.setItem("lastScore", score);

    window.location.href = "result.html";

}