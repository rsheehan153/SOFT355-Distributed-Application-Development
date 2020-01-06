function clientButtonClicked(button){
	socket.emit('clientButtonClicked', roomName, button)
  }

socket.on('move-made', button => {
	tableclick(button)
  })

  function tableclick(button) 
  {
	document.getElementById(button).innerHTML = tableclick.token;
	tableclick.token = tableclick.token === 'X'? 'O' : 'X';
  }
tableclick.token = 'X';




function clearButtonClicked(button)
 {
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
