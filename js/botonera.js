
  document.addEventListener('DOMContentLoaded', function () {
    const sonidos = [
      './audios/harryPotter.mp3',
      './audios/indianaJones.mp3',
      './audios/panteraRosa.mp3',
      './audios/piratasDelCaribe.mp3',
      './audios/rocky.mp3',
      './audios/starWars.mp3',
    ];

    const botones = [];
    const audios = [];

    for (let i = 0; i < 6; i++) {
      botones[i] = document.getElementById(`boton${i + 1}`);
      audios[i] = new Audio(sonidos[i]);

      botones[i].addEventListener('click', () => {
        const audio = audios[i];

        if (!audio.paused) {
          // Si el audio está sonando, lo pausamos y lo reiniciamos
          audio.pause();
          audio.currentTime = 0;
        } else {
          // Pausar cualquier otro audio que esté sonando
          audios.forEach(a => {
            a.pause();
            a.currentTime = 0;
          });

          // Reproducir el audio correspondiente
          audio.play();
        }
      });
    }
  });

