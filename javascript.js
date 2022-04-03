//var words = ["Rock", "Paper", "Scisors"];

//function computerPlay(arr) {
 //   return arr[Math.floor(Math.random() * words.length)];
//}

//console.log(computerPlay(words));

function playRound(playerSelection, computerSelection) {
    const messageToPlayer = `Computer chose ${computerSelection}, you chose ${playerSelection}`;
    console.log(messageToPlayer);
    
    if (playerSelection === "Rock" && computerSelection === "Scisors") {
        console.log("You won! Rock beats Scisors!");
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        console.log("You lost! Paper beats Rock!");
    } else if (playerSelection === "Rock" && computerSelection === "Rock"){
        console.log("It is a draw!");
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        console.log("You won! Paper beats Rock!");
    } else if (playerSelection === "Paper" && computerSelection === "Paper"){
        console.log("It is a draw!");
    } else if (playerSelection === "Paper" && computerSelection === "Scisors"){
        console.log("You lost! Paper beats Scisors!");
    } else if (playerSelection === "Scisors" && computerSelection === "Rock"){
        console.log("You lost! Rock beats Scisors!");
    } else if (playerSelection === "Scisors" && computerSelection === "Paper"){
        console.log("You won! Scisors beats Paper!");
    } else if (playerSelection === "Scisors" && computerSelection === "Scisors"){
        console.log("It is a draw!");
    }
 
}

function computerPlay() {
    const randomNumber = Math.floor(Math.random()*3);
    if (randomNumber ===0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else { 
        return "Scissors";
    }
}

function playerPlay() {
    const userInput = prompt("rock, paper, scissors: ");
    return userInput;
}

console.log(playRound(playerPlay(), computerPlay()));



