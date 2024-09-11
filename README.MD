# Funções em JavaScript

## Introdução às Funções

1. **O que é uma Função?**

   - Um bloco de código projetado para realizar uma tarefa específica.
   - É reutilizável e pode ser chamado sempre que necessário.

2. **Declaração de Função**

   - Sintaxe básica: `function nomeDaFuncao() { // código }`
   - `function + nomeDaFuncao + () + {}`
   - Exemplo:
     ```javascript
     function saudacao() {
       console.log("Olá, mundo!");
     }
     saudacao();
     ```

3. **Chamando Funções**
   - Executar uma função ao referenciá-la seguida de parênteses: `nomeDaFuncao();`

## Retorno de Funções

1. **A Palavra-chave `return`**

   - Usada para retornar um valor de uma função.
   - Termina a execução da função.
   - Exemplo:
     ```javascript
     function quadrado(n) {
       return n * n;
     }
     ```

2. **Funções Sem Retorno**
   - Executam uma ação sem retornar um valor (retornam `undefined` implicitamente).

## Parâmetros e Argumentos

1. **Definindo Parâmetros**

   - Variáveis listadas na definição de uma função.
   - Exemplo:
     ```javascript
     // Os paramêtros são a e b
     function soma(a, b) {
       return a + b;
     }
     ```

2. **Passando Argumentos**

   - Valores passados para a função quando ela é chamada.
   - Exemplo:
     ```javascript
     // Os paramêtros são a e b
     function soma(a, b) {
       // a = 3
       // b = 4
       return a + b; // Retorna 7
     }
     let resultado = soma(3, 4); // Argumentos são 3 e 4
     console.log(resultado); // Isso vai retornar 7
     ```

3. **Parâmetros Padrão**

   - Definidos para garantir que parâmetros tenham um valor padrão.
   - Exemplo:

     ```javascript
     // Caso a função seja invocada sem nenhum valor o valor da variável b vai ser igual a 2
     function multiplicar(a, b = 2) {
       return a * b;
     }

     multiplicar(1); // Isso vai retornar o valor 2 pois é 1 x 2.
     ```

## Funções Anônimas

1. **Definição**

   - Funções sem nome, atribuídas a variáveis ou usadas como argumentos.
   - Exemplo:

     ```javascript
     const saudacao = function () {
       console.log("Olá, mundo!");
     };
     saudacao();
     ```

## Arrow Functions

1. **Sintaxe e Definição**

   - Introduzidas no ES6, são uma forma mais curta de escrever funções.
   - Sintaxe básica: `const nomeFuncao = (parametros) => { // código }`
   - Exemplo:
     ```javascript
     const soma = (a, b) => a + b;
     ```

2. **Características**

   - `this` léxico: Não redefine o valor de `this` dentro da função.
   - Não possuem `arguments`, `super`, ou `new.target`.

3. **Uso de Arrow Functions**
   - Adequadas para callbacks e funções curtas.
   - Exemplo:
     ```javascript
     const numeros = [1, 2, 3];
     const dobrados = numeros.map((n) => n * 2);
     ```

## Funções Imediatamente Invocadas (IIFE)

1. **Definição**

   - Funções que são executadas assim que definidas.
   - Sintaxe: `(function() { // código })();`

2. **Uso Comum**
   - Evitar poluição do escopo global.
   - Exemplo:
     ```javascript
     (function () {
       console.log("IIFE executada!");
     })();
     ```

## Funções Assíncronas

1. **Funções `async` e `await`**

   - Funções declaradas com `async` retornam uma `Promise`.
   - `await` é usado para esperar por uma `Promise` dentro de funções `async`.
   - Exemplo:
     ```javascript
     async function buscarDados() {
       const resposta = await fetch("https://api.exemplo.com/dados");
       const dados = await resposta.json();
       console.log(dados);
     }
     ```

2. **Manipulação de `Promise`**
   - `then()`, `catch()`, `finally()` são usados para lidar com o resultado de `Promise`.
   - Exemplo:
     ```javascript
     fetch("https://api.exemplo.com/dados")
       .then((resposta) => resposta.json())
       .then((dados) => console.log(dados))
       .catch((erro) => console.error("Erro:", erro));
     ```

## Funções Recursivas

1. **Definição**

   - Funções que chamam a si mesmas até que uma condição base seja atingida.
   - Exemplo de cálculo de fatorial:
     ```javascript
     function fatorial(n) {
       if (n === 0) return 1;
       return n * fatorial(n - 1);
     }
     ```

2. **Considerações**
   - Uso cuidadoso para evitar estouro de pilha.
   - Substituível por iterações em muitos casos.
