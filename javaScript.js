const buttons = document.querySelectorAll('button');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const pW = document.querySelector('#win');
const pT = document.querySelector('#tie');
const pL = document.querySelector('#loose');
const round = document.querySelector('.round');
const ganador = document.querySelector('#ganador');
const acumuladoPlayer = document.querySelector('.acumuladoPlayer');
const acumuladoPc = document.querySelector('.acumuladoPc');
const seccionEmpate = document.querySelector('.empate');
const opciones = document.querySelector('.opciones');
const ppot = document.querySelector('.ppot');


const posibilidades = ['Piedra', 'Tijera', 'Papel', 'Piedra', 'Tijera'];  // ordenadas de forma que siempre [i] le gana a [i + 1]

var puntajePlayer = 0;
var puntajeAi = 0;
var empate = 0;
var roundsTotal = 0;

var computerSelection;
var playerSelection;


const player = document.querySelector('.player');
const pc = document.querySelector('.pc');
const imagenSeleccionPlayer = document.createElement('img');
const imagenSeleccionPc = document.createElement('img');



const computerPlay = () => {
	var azar = Math.floor(Math.random() * 3)
	return posibilidades[azar];
}

//Agrega la imagen de seleccion del player
const seleccionPlayer = (playerSelection) => {
	imagenSeleccionPlayer.setAttribute('src', `images/${playerSelection}.png`)
	player.appendChild(imagenSeleccionPlayer);
}

//Agrega la imagen de seleccion de la PC
const seleccionPc = (computerSelection) => {
	imagenSeleccionPc.setAttribute('src', `images/${computerSelection}.png`)
	pc.appendChild(imagenSeleccionPc);
}




function clickHandler(e) {
	var playerSelection = e.target.value;
	seleccionPlayer(playerSelection);

	var computerSelection = computerPlay();
	seleccionPc(computerSelection);

	plays(playerSelection, computerSelection);
	};


function buttonListener() {
	buttons.forEach((button) => {
		button.addEventListener('click', clickHandler)});
	}

buttonListener();




const agregaCheck = (where) => {
	const imagenCheck = document.createElement('img')
	imagenCheck.setAttribute('src', 'images/checkmark.png');
	where.appendChild(imagenCheck);
}

const agregaEmpate = () => {
	const imagenX = document.createElement('img')
	imagenX.setAttribute('src', 'images/x.png');
	seccionEmpate.appendChild(imagenX);
}


const replayBtn = document.createElement('button');
replayBtn.textContent = 'Replay';

const plays = (playerSelection, computerSelection) => {
	roundsTotal++;

	if (playerSelection == 'Piedra' || playerSelection == 'Papel' || playerSelection == 'Tijera') {
		if (computerSelection == posibilidades[posibilidades.indexOf(playerSelection) + 1]) {  // chequea que la eleccion de la compu sea el proximo en posibilidades[]
			puntajePlayer += 1;
			agregaCheck(acumuladoPlayer);

		} else if(computerSelection == posibilidades[posibilidades.indexOf(playerSelection) + 2]) {  // chequea que la eleccion de la compu sea el [i + 2] en posibilidades[]
				puntajeAi += 1;
				agregaCheck(acumuladoPc);
		} else {
				empate += 1;
				agregaEmpate();
			}
	}
	if (puntajePlayer > puntajeAi && puntajePlayer == 5) {
		ganador.textContent = 'Ganaste!!!'
		ppot.style.display = 'none';
		opciones.appendChild(replayBtn);

	} else if (puntajePlayer < puntajeAi && puntajeAi == 5) {
		ganador.textContent = 'Perdiste!!!'
		ppot.style.display = 'none';
		opciones.appendChild(replayBtn);
	}
}



//replayBtn.addEventListener('click', reset());

replayBtn.addEventListener('click', function() {
	const imagenesScore = document.querySelectorAll('.seleccion > div > img');
	console.log(imagenesScore);
	imagenesScore.forEach(image => {
		image.style.display = 'none';
	});
});


/*function reset() {
	//const imagenesScore = document.querySelectorAll('.seleccion > div > img');
	console.log(imagenesScore);


	imagenesScore.forEach(image => {
		image.style.display = 'none';

		ppot.style.display = 'block';
	})
}*/

