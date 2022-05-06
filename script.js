const speak = document.getElementById('speak');

const playAudio = () => {
  const audio = new Audio('sounds/livrinho.mp3');
  audio.play();
};

speak.addEventListener('click', playAudio);
