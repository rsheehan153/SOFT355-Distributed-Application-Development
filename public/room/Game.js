
function tableclick(){
	this.innerHTML = tableclick.token;
	tableclick.token = tableclick.token === 'X'? 'O' : 'X';
}
tableclick.token = 'X';

for(var i = 1; i < 10; ++i)
{
	document.getElementById('cell' + i).onclick = tableclick;
}