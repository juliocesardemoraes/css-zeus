# Manipulação strings

### 1. **Strings como Arrays**

Em JavaScript, strings podem ser acessadas como arrays, ou seja, você pode acessar cada caractere individualmente usando índices, assim como faria com um array.

```js
let texto = "Hello, World!";
console.log(texto[0]); // H
console.log(texto[7]); // W
```

### 2. **Iterando sobre Strings**

Como strings podem ser acessadas por índice, você pode usar laços (`for`, `for...of`, `forEach`, etc.) para percorrer cada caractere.

#### Exemplo com `for`:

```js
let palavra = "JavaScript";

for (let i = 0; i < palavra.length; i++) {
  console.log(palavra[i]);
}
```

### 3. **Convertendo Strings em Arrays**

Se você precisar de uma manipulação mais avançada, pode converter a string em um array de caracteres com o método `split()`.

```js
let frase = "Eu amo JavaScript";
let arrayDePalavras = frase.split(" "); // Dividido por espaços
console.log(arrayDePalavras); // [ 'Eu', 'amo', 'JavaScript' ]
```

Você também pode converter cada caractere em um array:

```js
let palavra = "JavaScript";
let arrayDeCaracteres = palavra.split("");
console.log(arrayDeCaracteres); // [ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]
```

### 4. **Substituir Caracteres ou Substrings**

Você pode usar o método `replace()` para substituir partes de uma string. Ele aceita uma substring ou uma expressão regular como argumento.

```js
let frase = "Eu amo JavaScript";
let novaFrase = frase.replace("JavaScript", "programar");
console.log(novaFrase); // Eu amo programar
```
