// 1. Declare uma variável chamada challenge e atribua o valor inicial 'Curso Aprenda do Zero'
let challenge = "Curso Aprenda do Zero          "; // OK
// 2. Imprima a string no console do navegador usando console.log()
console.log(challenge); //OK

// 3. Imprima o comprimento da string no console do navegador usando console.log()
console.log(challenge.length);

// 4. Altere todos os caracteres da string para letras maiúsculas usando o método toUpperCase()
console.log(challenge.toUpperCase());

// 5. Altere todos os caracteres da string para letras minúsculas usando o método toLowerCase()
console.log(challenge.toLowerCase());

// 6. Verifique se a string contém a palavra "Script" usando o método includes()
console.log(challenge.includes("ZERO"));

// 7. Altere 'Curso Aprenda do Zero' para 'Curso Aprenda do Um' usando o método replace()
console.log(challenge.replace("Zero", "Um"));

// 8. Qual é o caractere no índice 15 na string 'Curso de aprenda do zero' ? Use o método charAt()
console.log(challenge.charAt(15));
console.log(challenge[15]);

// 9. Qual é o código do caractere 'z' na string 'Curso de aprenda do zero' usando charCodeAt()
console.log(challenge.charCodeAt(17));

// 10. Use trim() para remover qualquer espaço em branco no início e no final de uma string. Ex: ' Curso Aprenda do Zero '.
console.log(challenge.trim());
