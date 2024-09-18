// 2. Trocar a Cor de Fundo
// Crie um botão que, ao ser clicado,
// troque a cor de fundo da página para uma cor de sua escolha.
// Você vai usar: getElementsByTagName, style.backgroundColor

function trocarCor() {
  const body = document.getElementsByTagName("body")[0];
  body.style.background = "red";
}
