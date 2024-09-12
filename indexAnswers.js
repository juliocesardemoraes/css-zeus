// 1. Função de Saudação
// Crie uma função chamada saudacao 
// que receba um nome como parâmetro 
// e imprima "Olá, [nome]!" no console.
function saudacao(nome){
    console.log(`Olá, ${nome}`)
}
saudacao("Júlio")


// 2. Função de Subtração
// Crie uma função chamada subtracao 
// que receba dois números como parâmetros 
// e retorne a diferença entre eles.
function subtracao(num1,num2){
    return  Math.abs(num1 - num2);
}
const diff = subtracao(200,3000);
console.log("O resultado da subtração é: ", diff)


// 3. Função de Multiplicação
// Crie uma função chamada multiplicacao 
// que receba dois números 
// e retorne o produto deles.
function multiplicacao(num1,num2){
    return num1 * num2;
}

const multi = multiplicacao(4,3)
console.log("O resultado da multiplicacao é: ", multi)


// 4. Função de Concatenar Strings
// Crie uma função chamada concatenar 
// que receba duas strings 
// e retorne a concatenação delas.
function concatenar(str1,str2){
    return str1 + str2;
}

const conc = concatenar("Meu nome é ", "Júlio")
console.log("O resultado da concatenar é: ", conc)

// 5. Função para Encontrar o Maior Número
// Crie uma função chamada maiorNumero 
// que receba dois números 
// e retorne o maior deles.
function maiorNumero(num1,num2){
    return num1 > num2 ? num1 : num2
}

const maior = maiorNumero(100,20);
console.log("O resultado do maiorNumero é: ", maior)


// 6. Função de Verificação de Paridade
// Crie uma função chamada parouimpar 
// que receba um número e retorne true se for par, false caso contrário.
function parouimpar(num1){
    return num1 % 2 === 0 ? true : false;
}

const epar = parouimpar(3);
console.log("O resultado do parouimpar é: ", epar)

// 7. Função de Conversão para Celsius
// Crie uma função chamada paraCelsius 
// que converta uma temperatura de Fahrenheit para Celsius.
// "Subtraímos a temperatura em ºF por 32 e dividimos o resultado por 1,8. "
function paraCelsius(tempF){
    return Number(((tempF - 32) / 1.8).toFixed(2));
}

const far = paraCelsius(90);
console.log("O resultado do paraCelsius é: ", far)

// 8. Função de Contagem de Caracteres
// Crie uma função chamada contarCaracteres 
// que receba uma string 
// e retorne um numero com a contagem de todos os caracteres.
function contarCaracteres(str1){
    return str1.length;
}
const contagemChar = contarCaracteres("Julio César")
console.log("O resultado do contarCaracteres é: ", contagemChar)


// 9. Função de Média
// Crie uma função chamada media 
// que receba um array de números 
// e retorne a média

function media(arrayNum){
    let soma = 0;
    for(let i = 0; i<arrayNum.length; i++){
        soma += arrayNum[i];
    }
    return soma / arrayNum.length;
}
        //    0 1 2
const nums = [2,3,4] // 2 + 3 + 4 = 9 / 3 = 3
const mediaTotal = media(nums);
console.log("O resultado do media é: ", mediaTotal)
