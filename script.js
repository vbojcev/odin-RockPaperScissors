function cpuPlay() {
    return Math.floor(Math.random()*3);
}

let gameDict = ["rock", "paper", "scissors"];

function playGame() {

    for (let i=0; i<5; i++) {
        let playerEntry = prompt("Play 'rock', 'paper', or 'scissors': ");
        let cpuEntry = gameDict[cpuPlay()];
        if ((cpuEntry=="rock" && playerEntry =="paper") || (cpuEntry=="paper" && playerEntry =="scissors") || (cpuEntry=="scissors" && playerEntry =="rock")) {
            console.log("You won :) cpu played "+cpuEntry);
        } else if (cpuEntry==playerEntry) {
            console.log("You tied, cpu played "+cpuEntry);
        } else if (playerEntry!="rock" && playerEntry!="paper" && playerEntry!="scissors") {
            console.log("Please enter a valid play.");
        } else {
            console.log("You lost :( cpu played "+cpuEntry);
        }
    }
}

playGame();
console.log("Game Over!");