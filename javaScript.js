const subtitulo = document.querySelector('.subtitulo');
const ganaste = document.querySelector('.ganaste');
const perdiste = document.querySelector('.perdiste');
const buttons = document.querySelectorAll('button');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const round = document.querySelector('.round');
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
  imagenSeleccionPlayer.setAttribute('src', `images/${playerSelection}.png`);
  imagenSeleccionPlayer.classList.add('player-seleccion');
	player.appendChild(imagenSeleccionPlayer);
}

//Agrega la imagen de seleccion de la PC
const seleccionPc = (computerSelection) => {
  pc.innerHTML = '';
  const imagenSeleccionPcAnimada = document.createElement('div');
  imagenSeleccionPcAnimada.classList.add('pc-animado');
  pc.appendChild(imagenSeleccionPcAnimada);

  setTimeout(() => {  //saca la animacion y pone la imagen de seleccion de PC
    pc.innerHTML = '';
    imagenSeleccionPc.setAttribute('src', `images/${computerSelection}.png`)
    pc.appendChild(imagenSeleccionPc);
  }, 1500);

}




function clickHandler(e) {
  var playerSelection = e.target.value;
  var round = document.querySelector('.round');
  round.style.display = 'block';
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
  const imagenCheck = document.createElement('img');
  imagenCheck.classList.add('check');
	imagenCheck.setAttribute('src', 'images/checkmark.png');
	where.appendChild(imagenCheck);
}

const agregaEmpate = () => {
	const imagenX = document.createElement('img')
	imagenX.setAttribute('src', 'images/x.png');
	seccionEmpate.appendChild(imagenX);
}


const replayBtn = document.createElement('button');
replayBtn.classList.add('replayBtn');
replayBtn.textContent = 'Replay';

function sumaRound() {
	round.textContent = 'Round: ' + roundsTotal;
}

const plays = (playerSelection, computerSelection) => {
	roundsTotal++;
  sumaRound();

  setTimeout(() => {
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
    if (puntajePlayer > puntajeAi && puntajePlayer == 3) {
      subtitulo.style.display = 'none';
      ganaste.style.display = 'block';
      ppot.style.display = 'none';
      opciones.appendChild(replayBtn);
  
    } else if (puntajePlayer < puntajeAi && puntajeAi == 3) {
      subtitulo.style.display = 'none';
      perdiste.style.display = 'block';
      ppot.style.display = 'none';
      opciones.appendChild(replayBtn);
    }
  }, 1600);
	
}


function reset() {
	const imagenesScore = document.querySelectorAll('.seleccion .imagen');

	for(var i = 0; i < imagenesScore.length; i++) {
		while(imagenesScore[i].firstChild) {
			imagenesScore[i].removeChild(imagenesScore[i].firstChild);
		}
	}

  ganaste.style.display = 'none';
  perdiste.style.display = 'none';
  subtitulo.style.display = 'block';
	ppot.style.display = 'block';
	opciones.removeChild(replayBtn);
	roundsTotal = 0;
	puntajeAi = 0;
	puntajePlayer = 0;
	ganador.textContent = '';
	round.textContent = '';
}

replayBtn.addEventListener('click', reset);



