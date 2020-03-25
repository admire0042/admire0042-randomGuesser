let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
   return Math.floor(Math.random()*10)
   
}

function compareGuesses(user, computer, random){
  let abs1 = Math.abs(random - user);
  let abs2 = Math.abs(random - computer);
  
   if(abs1 === abs2){
      return true;
  }
  else if(abs1 > abs2){
      return false
  }
    else if(abs2 > abs1){
        return true;
    } 
}

function updateScore(update){
    if(update == "human"){
        humanScore++
    }
    else if(update == "computer"){
        computerScore++
    }
}