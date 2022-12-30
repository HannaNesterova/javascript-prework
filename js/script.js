// Computer choises
function playGame (playerInput) {
    clearMessages();
    let roundNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(roundNumber);

    function getMoveName(argMoveId){
        if (argMoveId === 1){
            return 'камінь';
        }
        else if (argMoveId === 2){
            return 'папір';
        }
        else if(argMoveId === 3){
            return 'ножиці';
        } 
        else(
            alert('Використовуй цифри')
        )
    }

    printMessage('Рух компютера: ' + computerMove);

    // Player

    // let playerInput = prompt ('Вибери свій рух! 1 - це камінь, 2 - це папір, 3 - це ножиці');
    let playerMove = getMoveName(Number(playerInput));
    printMessage('Tвій рух :' + playerMove);

    let argComputerMove = computerMove;
    let argPlayerMove = playerMove;
    function displayResult (argComputerMove , argPlayerMove){
        printMessage('Компютер обрав ' + argComputerMove + ', а ти обрав ' + argPlayerMove);
            if( argComputerMove === 'камінь' && argPlayerMove === 'папір'){
                printMessage('Вітаю, ти переміг!');
            }
            else if( argComputerMove === 'ножиці' && argPlayerMove === 'камінь'){
                printMessage('Вітаю, ти переміг!');
            }
            else if( argComputerMove === 'папір' && argPlayerMove === 'ножиці'){
            printMessage('Вітаю, ти переміг!');
            }
            else if( argComputerMove === 'папір' && argPlayerMove === 'папір' || computerMove === 'ножиці' && playerMove === 'ножиці' || computerMove === 'камінь' && playerMove === 'камінь'){
            printMessage('Нечія,спробуйте ще раз.');
            }
            else{
            printMessage('Нажаль ти програв,спробуйте ще...');
            }
        }

displayResult (argComputerMove , argPlayerMove);

}

playGame(3);

const playRock = document.querySelector('#play-rock');
const playPaper = document.querySelector('#play-paper');
const playScissors = document.querySelector('#play-scissors');

playRock.addEventListener('click', function () {
    playGame (1) ;
    
});
playPaper.addEventListener('click', () =>  {
    playGame(2);
});

playScissors.addEventListener('click', () =>  {
    playGame (3)
});