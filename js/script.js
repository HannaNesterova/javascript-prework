
let computerMove = 'камінь';
let playerMove = 'папір';

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

printMessage('Я грав' + computerMove + '! Якщо ти грав папером,то ти виграв!');

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}