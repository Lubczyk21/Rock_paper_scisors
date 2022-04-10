function playRound(playerSelection, computerSelection) {
    // dodaj wiadomość do gracza, żeby wiedział o co chodzi
    // wiadomość wykorzystuje string interpolation - wygoogluj "mdn template literals", jesli nie znasz tego
    const messageToPlayer = `Computer chose ${computerSelection}, you chose ${playerSelection}`;
    console.log(messageToPlayer);

    // logika się zgadza, musisz pamiętać, że powyższe parametry tej funkcji to po prostu inne funkcje, które 
    // tam umieszczasz wywołując tę funkcję - w linii 51
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You won! rock beats scissors!");
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lost! paper beats rock!");
    } else if (playerSelection === "rock" && computerSelection === "rock"){
        console.log("It is a draw!");
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You won! paper beats rock!");
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        console.log("It is a draw!");
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lost! paper beats scissors!");
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lost! rock beats scissors!");
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You won! scissors beats paper!");
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        console.log("It is a draw!");
    }
}

// computerPlay returns "rock||paper||scissors" based on random number
function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    // zwróć rock/paper/scissors na podstawie randomowej liczby od 0-2
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// playerPlay returns "rock||paper||scissors" from user's input
function playerPlay() {
    // uzyj prompt(), żeby dostać input od gracza
    const userInput = prompt("rock, paper, scissors: ");
    return userInput;
}

// do playRound() przesyłasz dwa parametry (w tym wypadku to funkcje), za które podstawiają się wartości, które one zwracają w "return"
console.log(playRound(playerPlay(), computerPlay()));

function game() {
    for (let i = 0; i <5; i++) {
        console.log(playRound(playerPlay(), computerPlay()));
    }
}

game();
