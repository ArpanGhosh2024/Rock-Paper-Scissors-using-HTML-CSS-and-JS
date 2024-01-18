let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreDisp = document.querySelector("#user-score");
const compScoreDisp = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock","paper","scissors"];
  const randIndex = Math.floor(Math.random() * 3); //random whole number generated in the range - [0,2] both inclusive
  return options[randIndex]; //returns the randomly generated computer's move
};

const drawGame = (userChoice) => {
  console.log("game was a draw");
  msg.innerText = `Draw Game! both you and computer chose ${userChoice}`;
  msg.style.backgroundColor = "#4C2B36";
};

const showWinner = (userWin,userChoice,compChoice) => {
  if(userWin){
    console.log("you win");
    msg.innerText = `You Win! your ${userChoice} beats computer's ${compChoice}.`;
    msg.style.backgroundColor = "green";
    userScore++; //increment userScore when user wins
    userScoreDisp.innerText = userScore; 
  }else{
    console.log("you lose");
    msg.innerText = `You Lose! computer's ${compChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red";
    compScore++; //increment compScore when computer wins
    compScoreDisp.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  console.log(`User's choice = ${userChoice}`); //user's choice
  const compChoice = genCompChoice();
  console.log(`Computer's choice = ${compChoice}`); //computer's choice

  if(userChoice === compChoice){ //draw game
    drawGame(userChoice);
  }else{
    let userWin = true; //variable to track if user has won or not
    if(userChoice === "rock"){
      userWin = (compChoice === "paper")? false : true;
    }else if(userChoice === "paper"){
      userWin = (compChoice === "scissors")? false : true;
    }else{ //userChoice = "scissors"
      userWin = (compChoice === "rock")? false : true; 
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

