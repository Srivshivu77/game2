let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
     const options = ["rock","paper","scissors"];
     const randIdx = Math.floor(Math.random()*3);
     return options[randIdx];
}

const drawGame = () => {
     msg.innerHTML = "Game was drawn. Play again";
     msg.style.backgroundColor = "#081b31";
}

const showWinner = (userwin,userChoice,compChoice) => {
     if(userwin){
          msg.innerHTML = `You win! Yours ${userChoice} beats ${compChoice}`;
          msg.style.backgroundColor = "green";
          userScore++;
          userScorepara.innerHTML = userScore;
          
     }else{
          msg.innerHTML = `You lose! ${compChoice} beats yours ${userChoice}`;
          msg.style.backgroundColor = "red";
          compScore++;
          compScorepara.innerHTML = compScore;
     }
}


const playGame = (userChoice) => {
     const compChoice = genCompChoice();
     if( userChoice === compChoice){
          //draw game
          drawGame();
     }
     else{
          let userwin = true;
          if( userChoice === "rock"){
               //scissors and paper
               userwin = compChoice === "paper" ? false : true;
          }else if( userChoice === "paper"){
               userwin = compChoice === "scissors" ? false : true;
          }else {
               userwin = compChoice === "paper" ? false : true;
          }
          showWinner(userwin,userChoice,compChoice);
     }
}

choices.forEach((choice) => {
     choice.addEventListener("click",() => {
          const userChoice = choice.getAttribute("id");
          playGame(userChoice);
     })
});
