function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;

    document.getElementById('messages').appendChild(div);
}
printMessage('Я грав каменем! Якщо ти грав папером,то ти виграв!');

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}