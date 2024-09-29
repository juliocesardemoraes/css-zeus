// console.log("olá 1");
// console.log("olá 2");
// console.log("olá 3");
// console.log("olá 4");
// console.log("olá 5");

// for (let i = 0; i < 5; i++) {
//   console.log("olá " + (i + 1));
// }

const cores = ["azul", "vermelho", "roxo", "branco", "preto"];
const pular = "roxo";

for (let i = 0; i < cores.length; i++) {
  if (pular === cores[i]) {
    continue;
  }

  console.log(cores[i]);
}

// cores.map((item) => {
//   console.log(item);
// });
