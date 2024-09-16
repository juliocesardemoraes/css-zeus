# Resumo das aulas de Objeto e Array

## Array

### 1. Criação (Create)

Para criar um novo item em um array, usamos o método `push()`.

```javascript
let frutas = []; // Array vazio
frutas.push("Maçã"); // Adiciona "Maçã" ao array
console.log(frutas); // ["Maçã"]
```

### 2. Leitura (Read)

Para ler um valor de um array, acessamos o item pelo seu índice.

```javascript
let frutas = ["Maçã", "Banana"];
console.log(frutas[0]); // "Maçã"
```

Para lermos todos os valores de um array de forma dinâmica precisamos de um loop.

```javascript
let frutas = ["Maçã", "Banana"];

// Explicando o for loop

// 1 - let i = 0; // Inicializa a varíavel de contador que vai ser usado no loop

// 2 - i < frutas.length; // Condição de até onde o loop vai, nesse caso length = 2. Então
// o loop vai de 0 até o valor 1 (0 -> 1), porque a condição é que seja menor do que 2.

// 3 - i++ // O que será feito no final de cada vez que passamos pelo laço. Nesse caso
// o i vai aumentar em 1.

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
```

Podemos fazer o loop utilizando map também!

```javascript
let frutas = ["Maçã", "Banana"];

frutas.map((item) => {
  console.log(item);
});
```

### 3. Atualização (Update)

Para atualizar um item em um array, acessamos o índice e atribuímos um novo valor.

```javascript
let frutas = ["Maçã", "Banana"];
frutas[1] = "Laranja"; // Atualiza "Banana" para "Laranja"
console.log(frutas); // ["Maçã", "Laranja"]
```

### 4. Deleção (Delete)

Para remover um item de um array, usamos o método `splice()`.

```javascript
let frutas = ["Maçã", "Banana"];
frutas.splice(1, 1); // Remove 1 item a partir do índice 1 (remove a "Banana")
console.log(frutas); // ["Maçã"]
```

Para remover um último item de um array usamos o método `pop()`

```javascript
let frutas = ["Maçã", "Banana", "Abacaxi"];
frutas.pop(); // Remove o último item (remove o "Abacaxi")
console.log(frutas); // ["Maçã", "Banana"]
```

## Objetos

### 1. Criação (Create)

Para criar uma nova propriedade em um objeto, basta atribuir um valor à nova chave.

```javascript
let pessoa = {}; // Objeto vazio
pessoa.nome = "João"; // Adiciona a propriedade "nome"
console.log(pessoa); // { nome: "João" }
```

### 2. Leitura (Read)

Para ler uma propriedade de um objeto, acessamos pela chave. usando o ponto(.)

```javascript
let pessoa = { nome: "João", idade: 25 };
console.log(pessoa.nome); // "João"
```

### 3. Atualização (Update)

Para atualizar uma propriedade de um objeto, basta atribuir um novo valor à chave existente. usando o ponto(.)

```javascript
let pessoa = { nome: "João", idade: 25 };
pessoa.idade = 26; // Atualiza a idade para 26
console.log(pessoa); // { nome: "João", idade: 26 }
```

### 4. Deleção (Delete)

Para deletar uma propriedade de um objeto, usamos a palavra-chave `delete`.

```javascript
let pessoa = { nome: "João", idade: 25 };
delete pessoa.idade; // Remove a propriedade "idade"
console.log(pessoa); // { nome: "João" }
```
