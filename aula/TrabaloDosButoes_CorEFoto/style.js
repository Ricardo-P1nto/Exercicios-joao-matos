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

function mostrarDados() {
  fetch("dados.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("dadosDaAPI");
      container.innerHTML = "";
      data.dados.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = `<h2>${item.nome}</h2><p>${item.descricao}</p>`;
        container.appendChild(div);
      });
    })
    .catch(error => console.error("Erro ao buscar os dados:", error));
}
