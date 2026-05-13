// ========================================
// CONFIG
// ========================================

document.getElementById('coupleName').innerHTML =
`${CONFIG.nome1} & ${CONFIG.nome2} ❤️`;

document.getElementById('surpriseText').innerHTML =
CONFIG.tituloSurpresa;

document.getElementById('music').src =
CONFIG.musica;

const dataNamoro =
new Date(CONFIG.dataNamoro);

// ========================================
// GALERIA
// ========================================

const gallery =
document.querySelector('.gallery');

CONFIG.fotos.forEach(foto => {

  const img =
  document.createElement('img');

  img.src = foto;

  gallery.appendChild(img);

});

// ========================================
// BOTÃO SURPRESA
// ========================================

const surpriseBtn =
document.getElementById('surpriseBtn');

const hiddenSections =
document.querySelectorAll('.hidden');

surpriseBtn.addEventListener('click', () => {

  // Música
  playMusic();

  // Mostrar seções
  hiddenSections.forEach((section,index) => {

    setTimeout(() => {

      section.classList.add('show');

    }, index * 1200);

  });

  // Texto digitando
  setTimeout(() => {

    typeMessage();

  },2500);

  // Corações
  createHearts();

  // Esconde botão
  surpriseBtn.style.display = 'none';

});

// ========================================
// TYPEWRITER
// ========================================

const message =
CONFIG.mensagem.replace(/<br>/g,"\n");

let index = 0;

function typeMessage(){

  const typedText =
  document.getElementById('typed-text');

  const interval =
  setInterval(() => {

    typedText.innerHTML +=
    message.charAt(index);

    index++;

    if(index >= message.length){

      clearInterval(interval);

    }

  },35);

}

// ========================================
// CORAÇÕES
// ========================================

function createHearts(){

  setInterval(() => {

    const heart =
    document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML = '❤️';

    heart.style.left =
    Math.random() * 100 + 'vw';

    heart.style.fontSize =
    (Math.random() * 20 + 10) + 'px';

    heart.style.animationDuration =
    (Math.random() * 5 + 5) + 's';

    document.body.appendChild(heart);

    setTimeout(() => {

      heart.remove();

    },10000);

  },500);

}

// ========================================
// CONTADOR
// ========================================

function atualizarContador(){

  const agora = new Date();

  const diferenca =
  agora - dataNamoro;

  const dias =
  Math.floor(
  diferenca /
  (1000 * 60 * 60 * 24)
  );

  const horas =
  Math.floor(
  (diferenca / (1000 * 60 * 60)) % 24
  );

  const minutos =
  Math.floor(
  (diferenca / (1000 * 60)) % 60
  );

  const segundos =
  Math.floor(
  (diferenca / 1000) % 60
  );

  document.getElementById('dias').innerText =
  dias;

  document.getElementById('horas').innerText =
  horas;

  document.getElementById('minutos').innerText =
  minutos;

  document.getElementById('segundos').innerText =
  segundos;
}

setInterval(atualizarContador,1000);

atualizarContador();

// ========================================
// MÚSICA
// ========================================

function playMusic(){

  const music =
  document.getElementById('music');

  music.volume = 0.5;

  music.play();

}

// ========================================
// EXPLOSÃO FINAL
// ========================================

function explosion(){

  for(let i = 0; i < 120; i++){

    const heart =
    document.createElement('div');

    heart.innerHTML = '❤️';

    heart.style.position = 'fixed';

    heart.style.left =
    Math.random() * 100 + 'vw';

    heart.style.top = '100vh';

    heart.style.fontSize =
    (Math.random() * 35 + 10) + 'px';

    heart.style.zIndex = '9999';

    document.body.appendChild(heart);

    heart.animate([

      {
        transform:'translateY(0)',
        opacity:1
      },

      {
        transform:
        `translateY(-${window.innerHeight + 200}px)`,

        opacity:0
      }

    ],{

      duration:3500,

      easing:'ease-out'

    });

    setTimeout(() => {

      heart.remove();

    },3500);
  }

}