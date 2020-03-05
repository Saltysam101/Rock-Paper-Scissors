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
    if (userChoice === computerChoice){
        document.getElementById('winner').innerHTML="It is a tie!";
    }
    if (userChoice === 'rock' && computerChoice === 'paper'){
        document.getElementById('winner').innerHTML="The computer won!";
    }
    else{
        document.getElementById('winner').innerHTML="You won!";
    }
    if(userChoice === 'paper' && computerChoice === 'scissors'){
        document.getElementById('winner').innerHTML="The computer won!";
    }
    else{
        document.getElementById('winner').innerHTML="You won!";
    }
    if(userChoice === 'scissors' && computerChoice === 'rock'){
        document.getElementById('winner').innerHTML="The computer won!";
    }
    else{
        document.getElementById('winner').innerHTML="You won!";
    }
}
let playGame = () => {
    getUserInput();
    computerChoice = getComputerInput();
    document.getElementById('computerChoice').innerHTML = computerChoice;
    document.getElementById('winner').innerHTML = function () {
        determineWinner(userChoice, computerChoice);
    }}

    document.getElementById("play").onclick = function() {playGame();}
