const getUserInput = (userChoice) =>{
userChoice = userChoice.toLowerCase();
return userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors'? userChoice : console.log('Error!')
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
        return 'It is a tie!'
    }
    if (userChoice === 'rock' && computerChoice === 'paper'){
        return 'The computer wins!'
    }
    else{
        return 'You win!'
    }
    if(userChoice === 'paper' && computerChoice === 'scissors'){
        return 'The computer wins!'
    }
    else{
        return 'You win!'
    }
    if(userChoice === 'scissors' && computerChoice === 'rock'){
        return 'The computer wins!'
    }
    else{
        return 'You win!'
    }
}
const playGame = () => {
    userChoice = getUserInput('rock');
    computerChoice = getComputerInput();
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`)
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();