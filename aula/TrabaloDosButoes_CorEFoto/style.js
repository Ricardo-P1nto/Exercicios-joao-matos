function mudarCor() {
  const titulo = document.getElementById("titulo");
  if (titulo.style.color === "yellowgreen") {
    titulo.style.color = "blue";
  } else {
    titulo.style.color = "yellowgreen";
  }
}

function mostrarPopUp() {
  alert("Boas");
}

const imagens = [
  "imagens/portugal.jpg",
  "imagens/istockphoto-1221460597-612x612.jpg",
  "imagens/fotos-de-portugal-60-1170x780.jpg"
];

let indiceAtual = 0;

function mudarImagem() {
  indiceAtual = (indiceAtual + 1) % imagens.length;
  document.getElementById("imagem").src = imagens[indiceAtual];
}
