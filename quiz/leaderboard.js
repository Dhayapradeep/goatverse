const board = document.getElementById("leaderboard");

db.collection("leaderboard")
.orderBy("score","desc")
.limit(20)
.get()
.then(snapshot=>{

let rank = 1;

snapshot.forEach(doc=>{

const player = doc.data();

let medal = rank;

if(rank===1){

medal="🥇";

}
else if(rank===2){

medal="🥈";

}
else if(rank===3){

medal="🥉";

}

board.innerHTML += `

<div class="player">

<div>

<b>${medal} ${player.name}</b><br>

<small>${player.rank}</small>

</div>

<div>

<b>${player.score}</b>

</div>

</div>

`;

rank++;

});

});

function goHome(){

window.location.href="../index.html";

}

function playAgain(){

window.location.href="quiz.html";
}