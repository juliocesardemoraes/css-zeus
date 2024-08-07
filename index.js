// 1 - Declare uma variável chamada nome e atribua a ela seu nome completo como uma string.
const nome = "Júlio César de Moraes Carvalho Filho";
console.log("Exercício 1: O seu nome é " + nome);

// 2 - Declare uma variável idade como um número inteiro representando sua idade.
const idade = 28;
console.log("Exercício 2: A sua idade é " + idade);

// 3 - Concatene as variáveis nome e idade em uma string com a mensagem: "Meu nome é [nome] e eu tenho [idade] anos."
const idadeENome = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";
const idadeENome2 = `Meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log("Exercício 3:", idadeENome);
console.log("Exercício 3:", idadeENome2);

// 4 - Declare uma variável maiorDeIdade e atribua a ela true se idade for 18 ou mais, caso contrário, false.
const maiorDeIdade = idade > 18;
console.log("Exercício 4: É maior de idade?", maiorDeIdade);

// 5 - Declare uma variável altura em metros (como um número decimal).
const altura = 1.82;
console.log("Exercício 5: Qual sua altura?", altura);
