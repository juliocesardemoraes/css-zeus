let idade = 16;
let carteiraMotorista = false;
// IF - se
// ELSE - senão

// if (idade >= 18) {
//   // Vai ser executado caso seja verdadeiro
//   console.log("Maior de idade");
// } else {
//   // Caso seja falso
//   console.log("Menor de idade");
// }

// if (idade >= 18 && carteiraMotorista === true) {
//   console.log("Pode dirigir");
// }

// if (idade >= 18 || carteiraMotorista === true) {
//   console.log("Pode dirigir");
// }

// Classificação de nota de prova

// Escreva um programa que converta uma nota numérica
// em uma nota com letras. Use a seguinte classificação:

/*
Nota >= 90: "A"
Nota >= 80: "B"
Nota >= 70: "C"
Nota >= 60: "D"
Nota < 60: "F"
*/

let nota = 59;

if (nota >= 90) {
  console.log("A nota é A");
} else if (nota >= 80) {
  console.log("A nota é B");
} else if (nota >= 70) {
  console.log("A nota é C");
} else if (nota >= 60) {
  console.log("A nota é D");
} else if (nota < 60) {
  console.log("A nota é F");
}
