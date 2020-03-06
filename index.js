const getUserInput = (userChoice) =>{
    userChoice = document.getElementById("userchoice").value;
    userChoice = userChoice.toLowerCase();
return userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors'? userChoice : alert('Error!');

}
const getComputerInput = () => {
    let randomNum = Math.floor(Math.random() * 3)
    switch (randomNum) {
        case 0:
            return 'rock';
            break;
            case 1:
                return 'paper';
                break;
                case 2:
                    return 'scissors';
                    break;
            
    }
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'rock' && computerChoice === 'paper' || userChoice === 'paper' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'rock' ){
        document.getElementById('winner').innerHTML="The computer won!";
    }
    else if (userChoice === computerChoice){
        document.getElementById('winner').innerHTML="It is a tie!";
    }
    else{
        document.getElementById('winner').innerHTML="You won!";
    }
    
}
let playGame = () => {
    getUserInput();
    computerChoice = getComputerInput();
    document.getElementById('computerchoice').innerHTML = computerChoice;
    determineWinner(getUserInput(), computerChoice);
    
    }

    document.getElementById("play").onclick = function() {playGame();}
