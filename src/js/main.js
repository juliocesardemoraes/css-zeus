const types = document.getElementsByClassName("type");

const text =
  "Olá meu nome é júlio, e vou te ensinar a construir um efeito de teclado muito legal!😎";

console.log(text[1]);

for (let i = 0; i < text.length; i++) {
  setTimeout(() => {
    types[0].textContent += text[i];
  }, 50 * i);
}
