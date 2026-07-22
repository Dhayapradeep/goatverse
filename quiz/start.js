const savedName = localStorage.getItem("playerName");

const welcome = document.getElementById("welcome");
const nameSection = document.getElementById("nameSection");
const startSection = document.getElementById("startSection");

if(savedName){

    welcome.innerHTML = "Welcome back, <b>" + savedName + "</b> 👋 If your name is wrong, click the 'Change Name' button.";

    nameSection.style.display = "none";

    startSection.style.display = "block";

}

function saveName(){

    const name = document.getElementById("playerName").value.trim();

    if(name === ""){

        alert("Please enter your name.");

        return;

    }

    localStorage.setItem("playerName", name);

    welcome.innerHTML = "Welcome, <b>" + name + "</b> 👋 If your name is wrong, click the 'Change Name' button.";

    nameSection.style.display = "none";

    startSection.style.display = "block";

}

function changeName(){

    localStorage.removeItem("playerName");

    location.reload();

}

function startQuiz(){

    window.location.href = "quiz.html";

}