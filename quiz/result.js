async function saveScore() {

    const name = localStorage.getItem("playerName");
    const score = Number(localStorage.getItem("lastScore"));

    let rank = "";

    if(score <= 10){
        rank = "🤡 Beginner Fan";
    }
    else if(score <= 25){
        rank = "👻 Casual Fan";
    }
    else if(score <= 50){
        rank = "☠️ True Supporter";
    }
    else if(score <= 75){
        rank = "🥵 Super Fan";
    }
    else if(score <= 100){
        rank = "🥶 Football Expert";
    }
    else{
        rank = "👑 Goated Fan";
    }

    const playerRef = db.collection("leaderboard").doc(name);

    const doc = await playerRef.get();

    if(!doc.exists){

        await playerRef.set({
            name:name,
            score:score,
            rank:rank
        });

    }else{

        const oldScore = doc.data().score;

        if(score > oldScore){

            await playerRef.update({
                score:score,
                rank:rank
            });

        }

    }

}

saveScore();

const player = localStorage.getItem("playerName");

const score = Number(localStorage.getItem("lastScore"));

document.getElementById("player").innerHTML =
"Player : " + player;

document.getElementById("score").innerHTML =
"Score : " + score;

let rank = "";

if(score <= 10){

rank = "🤡 Beginner Fan";

}
else if(score <= 25){

rank = "👻 Casual Fan";

}
else if(score <= 50){

rank = "☠️ True Supporter";

}
else if(score <= 100){

rank = "🥵 Super Fan";

}
else if(score <= 200){

rank = "🥶 Football Expert";

}
else{

rank = "👑 Goated Fan";

}

document.getElementById("rank").innerHTML =
"Rank : " + rank;

function playAgain(){

window.location.href="quiz.html";

}

function goHome(){

window.location.href="../index.html";

}

function leaderboard(){

window.location.href="leaderboard.html";
}