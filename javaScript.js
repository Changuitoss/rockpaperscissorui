const buttons = document.querySelectorAll('button');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const pW = document.querySelector('#win');
const pT = document.querySelector('#tie');
const pL = document.querySelector('#loose');
const pc = document.querySelector('#pc');
const round = document.querySelector('#round');
const ganador = document.querySelector('#ganador');

const posibilidades = ['Piedra', 'Tijera', 'Papel', 'Piedra', 'Tijera'];  // ordenadas de forma que siempre [i] le gana a [i + 1]

var puntajePlayer = 0;
var puntajeAi = 0;
var empate = 0;
var roundsTotal = 0;

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

const mensajes = (roundsTotal, computerSelection, puntajePlayer, puntajeAi, empate) => {
					round.textContent = `Round: ${roundsTotal}`;
					pc.textContent = `Elección de la PC: ${computerSelection}`;
					pW.textContent = `Ganados: ${puntajePlayer}`;
					pT.textContent = `Empates: ${empate}`;
					pL.textContent = `Perdidos: ${puntajeAi}`;
}


const plays = (playerSelection, computerSelection) => {
	roundsTotal++;

	if (playerSelection == 'Piedra' || playerSelection == 'Papel' || playerSelection == 'Tijera') {
		if (computerSelection == posibilidades[posibilidades.indexOf(playerSelection) + 1]) {  // chequea que la eleccion de la compu sea el proximo en posibilidades[]
			puntajePlayer += 1;
			mensajes(roundsTotal, computerSelection, puntajePlayer, puntajeAi, empate)
		} else if(computerSelection == posibilidades[posibilidades.indexOf(playerSelection) + 2]) {  // chequea que la eleccion de la compu sea el [i + 2] en posibilidades[]
				puntajeAi += 1;
				mensajes(roundsTotal, computerSelection, puntajePlayer, puntajeAi, empate)
		} else {
				empate += 1;
				mensajes(roundsTotal, computerSelection, puntajePlayer, puntajeAi, empate)
			}
	}

	if (puntajePlayer > puntajeAi && puntajePlayer == 5) {
		ganador.textContent = 'Ganaste!!!'
	} else if (puntajePlayer < puntajeAi && puntajeAi == 5) {
			ganador.textContent = 'Perdiste!!!'
	}
}