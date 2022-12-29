
 let roundNumber = Math.floor(Math.random() * 3 + 1);
 console.log('Твоя цифра: '+ roundNumber);

let computerMove = 'невідомий рух';
if (roundNumber === 1){
    computerMove = 'камінь';
}

printMessage('мій рух :' + computerMove);

