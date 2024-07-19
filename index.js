let userScore = 0;
let compScore = 0;

 let gameContainer = document.querySelectorAll('.box');
  let winnerMsg = document.querySelector("#msg");
   let userscorePara = document.querySelector('#user-score');
   let compscorePara= document.querySelector('#comp-score');

 
 const drawGame = ()=>{
    console.log("draw")
 }

  const showWinner = (userWin  , userChoice , compChoice)=>{
    if(userWin){

      userScore++;
      userscorePara.innerHTML = userScore;
      winnerMsg.innerText = `😊 you  win!  your ${userChoice}  beats ${compChoice}`
      winnerMsg.style.background = "green" 
    }else{
      compScore++;
      compscorePara.innerHTML = compScore;
    winnerMsg.innerText = `🙁  you lose   ${compChoice}  beats  your ${userChoice}`
    winnerMsg.style.background = "red" 
    }
  }
  const gencompChoice = () => {
  
    const options = ["rock" , "paper" , "scissors"]
    let randInd = Math.floor(Math.random() * 3) 
    console.log(randInd)
    return  options[randInd];
  }
  const playGame = (userChoice) =>{
   
    const compChoice = gencompChoice();
    console.log( 'comp choice =' , compChoice)

     if (userChoice === compChoice){
      drawGame()
      winnerMsg.innerText = "😒  game was draw play again"
      winnerMsg.style.background = "black" 
     }

     else{
      let userWin = true;
      if(
         userChoice  === 'rock'
      ){
         userWin = compChoice === 'paper' ? false : true;
      } else if( userChoice === 'paper'){
         userWin = compChoice === 'scissors' ? false : true;

      }
      else{
        userWin  =  compChoice === 'rock' ?  false : true;
      }

      showWinner(userWin , userChoice , compChoice);
     }
  }
 gameContainer.forEach((box) => {
   
    box.addEventListener('click' ,  ()=>{
          const userChoice = box.getAttribute('id')

       playGame(userChoice)
    })
 })
 

