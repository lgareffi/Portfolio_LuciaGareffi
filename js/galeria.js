

const imagenes = [
  { url: "./imagenes/FotoBariloche1.jpg" },
  { url: "./imagenes/FotoBariloche2.jpg" },
  { url: "./imagenes/FotoBariloche3.jpg" },
  { url: "./imagenes/FotoBariloche4.jpg" },
  { url: "./imagenes/FotoBariloche5.jpg" },
  { url: "./imagenes/FotoBariloche6.jpg" },
  { url: "./imagenes/FotoBariloche7.jpg" },
  { url: "./imagenes/FotoBariloche8.jpg" },
];

let indiceActual = 0;

// Galería en grid
const galeria = document.getElementById("galeria");

imagenes.forEach((img, i) => {
  const imagen = document.createElement("img");
  imagen.src = img.url;
  imagen.alt = `Foto ${i + 1}`;
  imagen.onclick = () => abrirSlideshow(i);
  galeria.appendChild(imagen);
});

// Funciones del slideshow
function abrirSlideshow(indice) {
  indiceActual = indice;
  document.getElementById("slideshow").style.display = "flex";
  mostrarImagen();
}

function cerrarSlideshow() {
  document.getElementById("slideshow").style.display = "none";
}

function cambiarImagen(n) {
  indiceActual += n;
  if (indiceActual < 0) indiceActual = imagenes.length - 1;
  if (indiceActual >= imagenes.length) indiceActual = 0;
  mostrarImagen();
}

function mostrarImagen() {
  const img = document.getElementById("imagen-slideshow");
  img.src = imagenes[indiceActual].url;
}
