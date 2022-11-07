let computerChoiceElement = document.getElementById("computerChoice");
let userChoiceElement = document.getElementById("userChoice");
let result = document.getElementById("result");
let buttons = document.querySelectorAll("button");
let winner = document.getElementById("winner");

let scoreBoard = [0, 0]

const updateScore = function(){
    document.getElementById("userScore").textContent = scoreBoard[0];
    document.getElementById("computerScore").textContent = scoreBoard[1];

    if(scoreBoard[0] == 5){
        winner.textContent = "Human wins!"
    }
    if(scoreBoard[1] == 5){
        winner.textContent = "The robots are taking over!"
    }
}

let outcomes = [
    {
        choice: 'Rock',
        beats: 'Scissors'
    },
    {
        choice: 'Paper',
        beats: 'Rock'
    },
    {
        choice: 'Scissors',
        beats: 'Paper'
    }
];

buttons.forEach(buttons => buttons.addEventListener('click', e => {

    let userChoice = buttons.innerText;
    userChoiceElement.textContent = userChoice;
    let computerChoice = outcomes[Math.floor(Math.random() * outcomes.length)];
    computerChoiceElement.textContent = computerChoice.choice;

    //get results
    if (computerChoice.beats === userChoice){
        result.textContent = "Computer wins"
        scoreBoard[1]++
        updateScore();
        return;
    }

    if (computerChoice.choice === userChoice){
        result.textContent = "Draw"
        return;
    }

    result.textContent = "User wins"
    scoreBoard[0]++
    updateScore();
    return;
  }))