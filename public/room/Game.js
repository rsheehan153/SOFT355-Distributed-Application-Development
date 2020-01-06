function clientButtonClicked(button) {
	socket.emit('clientButtonClicked', roomName, button)
	socket.emit('switch', roomName, button)
	for (var i = 1; i < 10; ++i) {
		document.getElementById('cell' + i).disabled = true;
	}
}

socket.on('move-made', button => {
	tableclick(button)
})

function tableclick(button) {
	document.getElementById(button).innerHTML = tableclick.token;
	tableclick.token = tableclick.token === 'X' ? 'O' : 'X';
}
tableclick.token = 'X';

socket.on('unDisable', button => {
	for (var i = 1; i < 10; ++i) {
		if (document.getElementById('cell' + i).innerHTML.indexOf('X') != -1) {
			document.getElementById('cell' + i).disabled = true;
		}
		else if (document.getElementById('cell' + i).innerHTML.indexOf( 'O') != -1) {
			document.getElementById('cell' + i).disabled = true;
		}
		else {
			document.getElementById('cell' + i).disabled = false;
		}
	}
})

function clearButtonClicked(button) {
	socket.emit('clearButtonClicked', roomName, button)

}

socket.on('move-clear', button => {
	tableclear()
})

function tableclear() {
	tableclear.token = ' ';
	for (var i = 1; i < 10; ++i) {
		document.getElementById('cell' + i).innerHTML = tableclear.token;
	}

}
