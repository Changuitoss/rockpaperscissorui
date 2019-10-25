const posibilidades = ['rock', 'scissors', 'paper', 'rock', 'scissors'];  // ordenadas de forma que siempre [i] le gana a [i + 1]

var puntajePlayer = 0;
var puntajeAi = 0;
var empate = 0;
var roundsTotal = 0;

const buttons = document.querySelectorAll('button');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

var computerSelection;
var playerSelection;

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		var playerSelection = e.target.value;

		var computerSelection = computerPlay();

		plays(playerSelection, computerSelection);
		})
});


const computerPlay = () => {
	var azar = Math.floor(Math.random() * 3)
	return posibilidades[azar];
}

const mensajes = (roundsTotal, playerSelection, computerSelection, puntajePlayer, puntajeAi, empate) => {
												console.log('Round: ', roundsTotal);
												console.log('------------');
												console.log('Tu eleccion: ', playerSelection);
												console.log('PC eleccion: ', computerSelection);
												console.log('------------');
												console.log('Vos:', puntajePlayer)
												console.log('PC: ', puntajeAi)
												console.log('Empates: ', empate)
												console.log('**********************************');
}




const plays = (playerSelection, computerSelection) => {
	roundsTotal += 1;

	if (playerSelection == posibilidades[0] || playerSelection == posibilidades[1] || playerSelection == posibilidades[2]) {
		if (computerSelection == posibilidades[posibilidades.indexOf(playerSelection) + 1]) {  // chequea que la eleccion de la compu sea el proximo en posibilidades[]
			puntajePlayer += 1;
			return mensajes(roundsTotal, playerSelection, computerSelection, puntajePlayer, puntajeAi, empate);
		} else if(computerSelection == posibilidades[posibilidades.indexOf(playerSelection) + 2]) {  // chequea que la eleccion de la compu sea el [i + 2] en posibilidades[]
				puntajeAi += 1;
				return mensajes(roundsTotal, playerSelection, computerSelection, puntajePlayer, puntajeAi, empate);
		} else {
				empate += 1;
				return mensajes(roundsTotal, playerSelection, computerSelection, puntajePlayer, puntajeAi, empate);
				 
		}
	}


	

}
