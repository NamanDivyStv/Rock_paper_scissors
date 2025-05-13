let humanScore = 0,
  computerScore = 0;

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissor = document.querySelector("#Scissor");
const div = document.querySelector(".div");

// Create a single paragraph for status and scores
const para = document.createElement("p");
const paragr = document.createElement("p");
div.appendChild(para);
div.appendChild(paragr);

function getComputerChoice() {
  const n = Math.random() * 30;
  if (n < 10) {
    console.log("Computer: rock");
    return "rock";
  } else if (n < 20) {
    console.log("Computer: paper");
    return "paper";
  } else {
    console.log("Computer: scissor");
    return "scissor";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanScore >= 5 || computerScore >= 5) {
    para.textContent = "Game Over!";
    return;
  }

  if (humanChoice === computerChoice) {
    para.textContent = "Draw";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissor") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissor" && computerChoice === "paper")
  ) {
    humanScore++;
    para.textContent = "You Win";
  } else {
    computerScore++;
    para.textContent = "Computer Wins";
  }

  paragr.textContent = `Human Score: ${humanScore}\nComputer Score: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    para.textContent += " - Game Over!";
  }
}

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissor.addEventListener("click", () => playRound("scissor", getComputerChoice()));
