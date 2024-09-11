// 1. Função de Saudação
// Crie uma função chamada saudacao OK 
// que receba um nome como parâmetro OK
// e imprima "Olá, [nome]!" no console.
function saudacao(nome){
    console.log(`Olá, ${nome}!`)
}
saudacao("Júlio")

// 2. Função de Subtração
// Crie uma função chamada subtracao que receba dois números como parâmetros e retorne a diferença entre eles.
function subtracao(num1,num2){
    return num1 - num2;
}
const sub = subtracao(2,3)
console.log("O retorno da subtração foi: ", sub)

// 3. Função de Multiplicação
// Crie uma função chamada multiplicacao que receba dois números e retorne o produto deles.
function multiplicacao(num1,num2){
    return num1 * num2;
}
const multi = multiplicacao(2,3)
console.log("O retorno da multiplicação foi: ", multi)

// 4. Função de Concatenar Strings
// Crie uma função chamada concatenar que receba duas strings e retorne a concatenação delas.
function concatenar(texto1,texto2){
    return texto1 + texto2;
}
const conc = concatenar("A minha idade é ", "28")
console.log("O retorno da concatenação foi: ", conc)


// 5. Função para Encontrar o Maior Número
// Crie uma função chamada maiorNumero que receba dois números e retorne o maior deles.
function maiorNumero(num1,num2){
 // ternário ou if/else
 return num1 > num2 ? num1 : num2
}

const maior = maiorNumero(1,42)
console.log("O retorno do maiorNumero foi: ", maior)

// 6. Função de Verificação de Paridade
// Crie uma função chamada parouimpar que receba um número e retorne true se for par, false caso contrário.
function parouimpar(num1){
    return num1 % 2 === 0 ? true : false
}
const epar = parouimpar(2)
console.log("O retorno do parouimpar foi: ", epar)


// 7. Função de Conversão para Celsius
// Crie uma função chamada paraCelsius que converta uma temperatura de Fahrenheit para Celsius.
// "Subtraímos a temperatura em ºF por 32 e dividimos o resultado por 1,8. "
function paraCelsius(tempF){
    return (tempF - 32) / 1.8
}

const far = paraCelsius(90)
console.log("O retorno do paraCelsius foi: ", far.toFixed(2))


// 8. Função de Contagem de Caracteres
// Crie uma função chamada contarCaracteres que receba uma string e retorne um numero com a contagem de todos os caracteres.
function contarCaracteres(texto1){
    return texto1.length;
}
const total = contarCaracteres("Meu nome é Júlio")
console.log("O retorno do contarCaracteres foi: ", total)

// 9. Função de Média
// Crie uma função chamada media que receba um array de números e retorne a média
function media(arrayDeNumeros){
    let soma = 0;
    for(let i = 0; i < arrayDeNumeros.length; i++){
        soma += arrayDeNumeros[i];
    }
    return soma / arrayDeNumeros.length
}
const array = [2,3,4] // 2 + 3 + 4 = (9  / 3) = 3
const mediaTotal = media(array);
console.log("O retorno da media foi: ", mediaTotal)

