console.log("Lets Play Rocks Papers Scissors");
let playerChoice;
let computerChoice;
//annonce what round it is out of five 
let roundCount = 1;
console.log("Round", roundCount);
//ask player to choose between rock, paper or scissors
//make the selection safe from input error, by  lowercase and ensuring its
//either rock paper or scissor

function securePlayerChoice(){
    playerChoice = prompt("Select Rocks, Paper or Scissors");
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper"  || playerChoice === "scissor" ){
        console.log("you chose", playerChoice);
        } 
        else {
        console.log("You must choose only between Rock, Paper or Scissor")
        securePlayerChoice()
                }
            }
 securePlayerChoice()

// get computer to choose between rock paper or scissors randomly.
function secureComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    console.log("the computer chose", randomNumber)
        if (randomNumber === 1){
            computerChoice = "rock"
            console.log("which is", computerChoice);
        }
        else if (randomNumber === 2){
            computerChoice = "paper"
            console.log("which is", computerChoice);
        }
        else if (randomNumber === 3){
            computerChoice = "scissor"
            console.log("which is", computerChoice);
        }
    }
        
secureComputerChoice()       

// define what item is stronger
// calculate who wins
// Result display what each chose and who won.
// repeat 5 times. showing who won each time

