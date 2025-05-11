// Psudocode
// Define a function getComputerChoice whose work is to get a random word rock paper or scissor
// In the function use random function to get a random number between 0 and 1 and multiply random by 30
// If the number after multiplying by 30 is between 0 to 10 return rock if between 10 to 20 return paper else scissor
// Define a function getHumanChoice whose work is to get the human input rock paper or scissor
// The function uses prompt function to prompt a dialog box when the code is executed to enter the choice of the user
// Create the variables that store the score of human and computer
// First write the code to play one round
// Define a function playRound that receives the humanChoice and computerChoice as parameters
// Define the logic using if else statements
// Now make the code functin playGame to play 5 rounds
let humanScore = 0,
  computerScore = 0;
function getComputerChoice() {
  let n = Math.random();
  n = n * 30.0;
  if (n >= 0.0 && n < 10.0) {
    console.log("Computer: rock");
    return "rock";
  } else if (n >= 10.0 && n < 20.0) {
    console.log("Computer: paper");
    return "paper";
  } else if (n >= 20.0 && n < 30.0) {
    console.log("Computer: scissor");
    return `scissor`;
  }
}
function getHumanChoice() {
  let choice = prompt("Rock, Paper or Scissor");
  console.log("You: "+choice);
  return choice;
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice == "rock") {
    if (computerChoice == "paper") {
      computerScore++;
      console.log("Computer Wins");
      console.log(
        "Human Score: " + humanScore + "\n" + "Computer Score: " + computerScore
      );
    } else if (computerChoice == "rock") {
      console.log("Draw");
      console.log(
        "Human Score: " + humanScore + "\n" + "Computer Score: " + computerScore
      );
    } else if (computerChoice == "scissor") {
      console.log("You win");
      humanScore++;
      console.log(
        "Human Score: " + humanScore + "\n" + "Computer Score: " + computerScore
      );
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "scissor") {
      computerScore++;
      console.log("Computer Wins");
      console.log(
        "Human Score: " + humanScore + "\n" + "Computer Score: " + computerScore
      );
    } else if (computerChoice == "paper") {
      console.log("Draw");
      console.log(
        "Human Score: " + humanScore + "\n" + "Computer Score: " + computerScore
      );
    } else if (computerChoice == "rock") {
      console.log("You win");
      humanScore++;
      console.log(
        "Human Score: " + humanScore + "\n" + "Computer Score: " + computerScore
      );
    }
  } else if (humanChoice == "scissor") {
    if (computerChoice == "rock") {
      computerScore++;
      console.log("Computer Wins");
      console.log(
        "Human Score: " + humanScore + "\n" + "Computer Score: " + computerScore
      );
    } else if (computerChoice == "scissor") {
      console.log("Draw");
      console.log(
        "Human Score: " + humanScore + "\n" + "Computer Score: " + computerScore
      );
    } else if (computerChoice == "rock") {
      console.log("You win");
      humanScore++;
      console.log(
        "Human Score: " + humanScore + "\n" + "Computer Score: " + computerScore
      );
    }
  }
}
for (let i = 0; i < 5; i++) {
  playRound(getHumanChoice(), getComputerChoice());
}
