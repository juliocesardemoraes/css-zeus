// 4. Esconder e Mostrar um Elemento
// Crie um botão que esconde ou mostra um parágrafo na
// página ao ser clicado (usando display: none e display: block).
// Você vai usar: getElementById, style.display

function esconderTexto() {
  // pegar o paragrafo
  const texto = document.getElementById("texto");
  // aplicar o display

  console.log(texto.style.display);
  // se estiver none atribuir como block
  if (texto.style.display == "none") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }

  // block
}
