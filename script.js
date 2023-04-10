console.log("Lets Play Rocks Papers Scissors");
let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
let powerScale = ["paper", "scissor", "rock"];
let resolution = "none"
let roundCount = 1;
// console.log(powerScale)
// console.log("Player:", powerScale.indexOf(playerChoice));
// console.log("Computer:", powerScale.indexOf(computerChoice));
// console.log("player minus computer:", powerScale.indexOf(playerChoice) - powerScale.indexOf(computerChoice));
// console.log("abs;", Math.abs(powerScale.indexOf(playerChoice) - powerScale.indexOf(computerChoice)))
// 
// function game(){
//     for (let roundCount = 1; roundCount < 6; roundCount++){
//         securePlayerChoice()
//         secureComputerChoice()
//         console.log("Round", roundCount);
//         resolveGame()
//     }
//     console.log("<===The game is complete, results below:  ===>");
//     console.log("Player Score: ", playerScore)
//     console.log("Computer Score: ", computerScore)
//     if (playerScore === computerScore){
//         console.log("The game is a Tie =/");
//     }
//     else if (playerScore > computerScore){
//         console.log("Player wins the game! =)");
//     }
//     else {
//         console.log("Player lost the game =(");
//     }
// }


//ask player to choose between rock, paper or scissors
//make the selection safe from input error, by  lowercase and ensuring its
//either rock paper or scissor


const buttonMenu = document.querySelectorAll(".buttonMenu");
const buttonPlay = document.querySelector(".buttonPlay");
const displayPlayerChoice = document.querySelector("#playerChoice.results");
const displayComputerChoice = document.querySelector("#computerChoice.results");
const displayResolution = document.querySelector("#resolution.results");
const displayRoundNumber = document.querySelector('span');
const displayScore = document.querySelector("#score.results");
const displayFinalScore = document.querySelector("#finalScore.results");

displayRoundNumber.textContent = `Round Number: ${roundCount}`;

buttonMenu.forEach((button) => 
    {
    button.addEventListener("click", (event) => 
        {
            playerChoice = event.target.value;
            console.log(playerChoice);
            displayPlayerChoice.textContent = `Player chose ${playerChoice}`;
        });
    });

buttonPlay.addEventListener('click', playRound)

function reset()
{
        roundCount = 1;
        displayRoundNumber.textContent = `Round Number: ${roundCount}`;
        displayComputerChoice.textContent = ``;
        displayResolution.textContent = ``; 
        displayScore.textContent = ``;  
        displayFinalScore.textContent = ``;
        playerScore =0;
        computerChoice =0;
        
}



function gameOver ()
    {
         if (playerScore === computerScore)
            {
                displayFinalScore.textContent = `"The game is a Tie =/"`;
              
            }
            else if (playerScore > computerScore)
            {
                displayFinalScore.textContent = `"Player wins the game! =)"`;
                
            }
            else
             {
                displayFinalScore.textContent = `Player lost the game =(`;
                
            }                 
    }





function playRound()
{
    secureComputerChoice();
    displayComputerChoice.textContent = `Computer chose ${computerChoice}`;
    resolveGame();
    console.log(resolution)
    switch (resolution)
    {
        case "tie": displayResolution.textContent = `Its a tie! Both player picked the same.`;
                break;
        case "player": displayResolution.textContent = `Player Wins!: ${playerChoice} beats: ${computerChoice}`;
                break;
        case "computer": displayResolution.textContent = `Player loses: ${playerChoice} is weaker than: ${computerChoice}`;
                break;
    };   
   roundCount++;
   displayRoundNumber.textContent = `Round Number: ${roundCount}`;
   displayScore.textContent = `Player Score: ${playerScore}|${computerScore} :Computer Score`;
   if (roundCount>5) gameOver()
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
        console.log("Its a tie! Both player picked the same.");
        resolution = "tie"
    }
else
    {
        switch(playerChoice){
            case "paper":
                if (abs>1){
                    console.log("Player Wins!:", playerChoice, " beats", computerChoice );
                    playerScore++;
                    resolution = "player"
                }
                else
                {
                    console.log("Player loses:", playerChoice, " is weaker than", computerChoice );
                    computerScore++
                    resolution = "computer"
                }
                break;
    
            case "scissor":
                if ((powerScale.indexOf(playerChoice) > powerScale.indexOf(computerChoice))){
                    console.log("Player Wins!:", playerChoice, " beats", computerChoice);
                    playerScore++;
                    resolution = "player"
                }
                else
                {
                    console.log("Player loses:", playerChoice, " is weaker than", computerChoice);
                    computerScore++
                    resolution = "computer"
                }
                break;          
                
            case "rock":
                if (abs>1){
                    console.log("Player loses:", playerChoice, " is weaker than", computerChoice  );
                    computerScore++
                    resolution = "computer"
                }
                else
                {
                    console.log("Player Wins!:", playerChoice, " beats", computerChoice );
                    playerScore++;
                    resolution = "player"
                }
                break;
               
            }
    }
    }




// Result display what each chose and who won.
// repeat 5 times. showing who won each time
