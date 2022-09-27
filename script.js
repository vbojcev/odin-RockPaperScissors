let rck = document.getElementById('rock');
let ppr = document.getElementById('paper');
let srs = document.getElementById('scissors');
let rst = document.getElementById('reset');
let cpuResponse = document.getElementById('computer-choice');
let scoreboard = document.getElementById('score');

let gameDict = ["rock", "paper", "scissors"];

let score = [0,0];

function updateScore() {
    scoreboard.textContent = score[0]+':'+score[1];
}

rst.addEventListener('click', () => {
    score[0] = 0;
    score[1] = 0;
    cpuResponse.textContent = ' ';
    updateScore();
});

function cpuPlay() {
    return Math.floor(Math.random()*3);
}

function playGame(playerEntry) {

    let cpuEntry = gameDict[cpuPlay()];

    let result = '';
    if ((cpuEntry=="rock" && playerEntry =="paper") || (cpuEntry=="paper" && playerEntry =="scissors") || (cpuEntry=="scissors" && playerEntry =="rock")) {
        console.log("You won :) cpu played "+cpuEntry+" you played "+playerEntry);
        result = 'won';
        score[0]++;
    } else if (cpuEntry==playerEntry) {
        console.log("You tied, cpu played "+cpuEntry+" you played "+playerEntry);
        result = 'tied';
    } else if (playerEntry!="rock" && playerEntry!="paper" && playerEntry!="scissors") {
        console.log("Please enter a valid play.");
        result = 'did not enter a valid play';
    } else {
        console.log("You lost :( cpu played "+cpuEntry+" you played "+playerEntry);
        result = 'lost';
        score[01]++;
    }

    cpuResponse.textContent = 'CPU Played '+cpuEntry+', you '+result;
    updateScore();
}

rck.addEventListener('click', () => playGame(rck.id));
ppr.addEventListener('click', () => playGame(ppr.id));
srs.addEventListener('click', () => playGame(srs.id));