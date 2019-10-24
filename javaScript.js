const posibilidades = ['rock', 'scissors', 'paper', 'rock', 'scissors'];  // ordenadas de forma que siempre [i] le gana a [i + 1]

var puntajePlayer = 0;
var puntajeAi = 0;
var empate = 0;
var roundsTotal = 0;

const buttons = document.querySelectorAll('button');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

buttons.forEach((button) => {
	button.addEventListener('click', () => {
	alert('test listener');
	})
});

var computerSelection;
var playerSelection;


const game = () => {
	for(var i = 0; i < 5; i++) {  // se juegan 3 rounds
		roundsTotal += 1;
		plays(playerSelection, computerSelection);
		console.log('------------');
		console.log('Vos:', puntajePlayer)
		console.log('PC: ', puntajeAi)
		console.log('Empates: ', empate)
		console.log('**********************************');
	}
}

const computerPlay = () => {
	var azar = Math.floor(Math.random() * 3)
	return posibilidades[azar];
}


const plays = (playerSelection, computerSelection) => {
	var i = 0;
	console.log('Round: ', roundsTotal);
	console.log('------------');
	//playerSelection = prompt('Elegi: Rock, Paper o Scissors').toLowerCase(); // TODO: no permitir que se ingrese cualquier cosa-.
	console.log('Tu eleccion: ', playerSelection);

	var computerSelection = computerPlay();
	console.log('PC eleccion: ', computerSelection);

	if (playerSelection == posibilidades[i] || playerSelection == posibilidades[i + 1] || playerSelection == posibilidades[i + 2]) {
		if (computerSelection == posibilidades[posibilidades.indexOf(playerSelection) + 1]) {  // chequea que la eleccion de la compu sea el proximo en posibilidades[]
			return puntajePlayer += 1;
		} else if(computerSelection == posibilidades[posibilidades.indexOf(playerSelection) + 2]) {  // chequea que la eleccion de la compu sea el [i + 2] en posibilidades[]
			return puntajeAi += 1;
		} else {
		return empate += 1;
		}
	}
}


game();