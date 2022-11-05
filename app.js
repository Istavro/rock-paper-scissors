let computerChoiceElement = document.getElementById("computerChoice");
let userChoiceElement = document.getElementById("userChoice");
let result = document.getElementById("result");
let buttons = document.querySelectorAll("button");

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
    userChoiceElement.innerHTML = userChoice;
    let computerChoice = outcomes[Math.floor(Math.random() * outcomes.length)];
    computerChoiceElement.innerHTML = computerChoice.choice;

    //get results
    if (computerChoice.beats === userChoice){
        result.innerHTML = "Computer wins"
        return;
    }

    if (computerChoice.choice === userChoice){
        result.innerHTML = "Draw"
        return;
    }

    result.innerHTML = "User wins"
    return;
  }))