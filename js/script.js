
 let roundNumber = Math.floor(Math.random() * 3 + 1);
 console.log('Твоя цифра: '+ roundNumber);

let computerMove = 'невідомий рух';
if (roundNumber === 1){
    computerMove = 'камінь';
}
printMessage('мій рух :' + computerMove);

let playerInput = prompt ('Вибери свій рух! 1 - це камінь, 2 - це папір, 3 - це ножиці');
console.log('Гравець обрав :' + playerInput);

let playerMove = 'невідомий рух';
if (playerInput === '1'){
    playerMove = 'камінь';
}
printMessage('твій рух :' + playerMove);
