// test tes test

console.log("Lets Play Rocks Papers Scissors");
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let powerScale = ["paper", "scissor", "rock"];
// console.log(powerScale)
// console.log("Player:", powerScale.indexOf(playerChoice));
// console.log("Computer:", powerScale.indexOf(computerChoice));
// console.log("player minus computer:", powerScale.indexOf(playerChoice) - powerScale.indexOf(computerChoice));
// console.log("abs;", Math.abs(powerScale.indexOf(playerChoice) - powerScale.indexOf(computerChoice)))
// 
function game(){
    for (let roundCount = 1; roundCount < 6; roundCount++){
        securePlayerChoice()
        secureComputerChoice()
        console.log("Round", roundCount);
        resolveGame()
    }
    console.log("<===The game is complete, results below:  ===>");
    console.log("Player Score: ", playerScore)
    console.log("Computer Score: ", computerScore)
    if (playerScore === computerScore){
        console.log("The game is a Tie =/");
    }
    else if (playerScore > computerScore){
        console.log("Player wins the game! =)");
    }
    else {
        console.log("Player lost the game =(");
    }
}
game()

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




// get computer to choose between rock paper or scissors randomly.
function secureComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    // console.log("the computer chose", randomNumber)
        if (randomNumber === 1){
            computerChoice = "rock"
            console.log("the computer chose", computerChoice);
        }
        else if (randomNumber === 2){
            computerChoice = "paper"
            console.log("the computer chose", computerChoice);
        }
        else if (randomNumber === 3){
            computerChoice = "scissor"
            console.log("the computer chose", computerChoice);
        }
    }
        
      

//****************** */ this is a test function to automate human player  ****************
// function securePlayerChoice(){
//     let randomNumber = Math.floor(Math.random()*3)+1;
//     // console.log("the computer chose", randomNumber)
//         if (randomNumber === 1){
//             playerChoice = "rock"
//             console.log("the player chose", playerChoice);
//         }
//         else if (randomNumber === 2){
//             playerChoice = "paper"
//             console.log("the player chose", playerChoice);
//         }
//         else if (randomNumber === 3){
//             playerChoice = "scissor"
//             console.log("the player chose", playerChoice);
//         }
//     }
//  -*****************************************
  
   
   



// calculate who wins
function resolveGame(){
let abs = Math.abs(powerScale.indexOf(playerChoice) - powerScale.indexOf(computerChoice))
if (powerScale.indexOf(playerChoice) === powerScale.indexOf(computerChoice))
    {
        console.log("Its a tie! Both player picked the same.")
    }
else
    {
        switch(playerChoice){
            case "paper":
                if (abs>1){
                    console.log("Player Wins!:", playerChoice, " beats", computerChoice );
                    playerScore++;
                }
                else
                {
                    console.log("Player loses:", playerChoice, " is weaker than", computerChoice );
                    computerScore++
                }
                break;
    
            case "scissor":
                if ((powerScale.indexOf(playerChoice) > powerScale.indexOf(computerChoice))){
                    console.log("Player Wins!:", playerChoice, " beats", computerChoice);
                    playerScore++;
                }
                else
                {
                    console.log("Player loses:", playerChoice, " is weaker than", computerChoice);
                    computerScore++
                }
                break;          
                
            case "rock":
                if (abs>1){
                    console.log("Player loses:", playerChoice, " is weaker than", computerChoice  );
                    computerScore++
                }
                else
                {
                    console.log("Player Wins!:", playerChoice, " beats", computerChoice );
                    playerScore++;
                }
                break;
               
            }
    }
    }




// Result display what each chose and who won.
// repeat 5 times. showing who won each time
