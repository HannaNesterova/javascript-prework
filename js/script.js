// Computer choises

let roundNumber = Math.floor(Math.random() * 3 + 1);
console.log('Згенерований номер: ' + roundNumber);

let computerMove = getMoveName(roundNumber);
printMessage('Рух компютера ' + computerMove);

function getMoveName(argMoveId){
    if (argMoveId === 1){
        return 'камінь';
    }
    else if (argMoveId === 2){
        return 'папір';
    }
    else if (argMoveId === 3){
        return 'ножиці';
    }
    else{
        return 'я не знаю такої цифри';
    }
}


console.log('Твоя цифра: '+ roundNumber);

//  let computerMove = 'невідомий рух';

printMessage('мій рух :' + computerMove);



// Player

let playerInput = prompt ('Вибери свій рух! 1 - це камінь, 2 - це папір, 3 - це ножиці');
console.log('Гравець обрав :' + playerInput);

// let playerMove = 'невідомий рух';
// if (playerInput === '1') {
//     playerMove = 'камінь';
// }
// else if (playerInput === '2') {
//     playerMove = 'папір';
// }

// else {
//     playerMove = 'ножиці';
// }

printMessage('твій рух :' + playerMove);

if( computerMove === 'камінь' && playerMove === 'папір'){
    printMessage('Вітаю, ти переміг!');
  }
  else if( computerMove === 'ножиці' && playerMove === 'камінь'){
    printMessage('Вітаю, ти переміг!');
  }
  else if( computerMove === 'папір' && playerMove === 'ножиці'){
    printMessage('Вітаю, ти переміг!');
  }
  else if( computerMove === 'папір' && playerMove === 'папір' || computerMove === 'ножиці' && playerMove === 'ножиці' || computerMove === 'камінь' && playerMove === 'камінь'){
    printMessage('Нечія,спробуйте ще раз.');
  }
  else if( playerInput < '1' || playerInput  > '3' ) {
   alert('Упс,я не знаю такої цифри, обери будь ласка між цифрами 1,2,3!');
  } 
  
  else{
    printMessage('Нажаль ти програв,спробуйте ще...');
  }