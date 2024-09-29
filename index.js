// Acessar caracteres de uma string. O primeiro e o último
let string = "JavascriptB011";
console.log(string[0]);
console.log(string[string.length - 1]);

// Contar o número de ocorrências de um caractere, exemplo "a"
let counterA = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] === "a") counterA++;
}

console.log(counterA);

// Contar o número de ocorrências de um caractere, exemplo "B"
let counterB = 0;

for (let i = 0; i < string.length; i++) {
  if (string[i] === "B") counterB++;
}

console.log(counterB);

// Ver se existem números no texto

for (let i = 0; i < string.length; i++) {
  console.log(isNaN(Number(string[i])) ? "Não é um número" : "É um número");
}
