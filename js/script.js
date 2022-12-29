// Computer choises
function getMoveName(argMoveId){
    if (argMoveId === '1'){
        return 'камінь';
    }
    else if (argMoveId === '2'){
        return 'папір';
    }
    else {
        return 'ножиці';
    }
}

let roundNumber = Math.floor(Math.random() * 3 + 1);


let computerMove = getMoveName(roundNumber);
printMessage('Рух компютера: ' + computerMove);



// Player

let playerInput = prompt ('Вибери свій рух! 1 - це камінь, 2 - це папір, 3 - це ножиці');
let playerMove = getMoveName(playerInput);
printMessage('Tвій рух :' + playerMove);

// if (playerInput === '1') {
//     playerMove = 'камінь';
// }
// else if (playerInput === '2') {
//     playerMove = 'папір';
// }

// else {
//     playerMove = 'ножиці';
// }
let argComputerMove = computerMove;
let argPlayerMove = playerMove;
function displayResult (argComputerMove , argPlayerMove){
    printMessage('Компютер обрав ' + argComputerMove + ' а ти обрав ' + argPlayerMove);
}
displayResult (argComputerMove , argPlayerMove);

// if( computerMove === 'камінь' && playerMove === 'папір'){
//     printMessage('Вітаю, ти переміг!');
//   }
//   else if( computerMove === 'ножиці' && playerMove === 'камінь'){
//     printMessage('Вітаю, ти переміг!');
//   }
//   else if( computerMove === 'папір' && playerMove === 'ножиці'){
//     printMessage('Вітаю, ти переміг!');
//   }
//   else if( computerMove === 'папір' && playerMove === 'папір' || computerMove === 'ножиці' && playerMove === 'ножиці' || computerMove === 'камінь' && playerMove === 'камінь'){
//     printMessage('Нечія,спробуйте ще раз.');
//   }
//   else if( playerInput < '1' || playerInput  > '3' ) {
//    alert('Упс,я не знаю такої цифри, обери будь ласка між цифрами 1,2,3!');
//   } 
  
//   else{
//     printMessage('Нажаль ти програв,спробуйте ще...');
//   }