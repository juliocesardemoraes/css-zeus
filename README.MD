# Aprofundando em Strings

```
No VSCODE é possível visualizar esse arquivo formatado pressionando ctrl + shift + v
```

### 1. Declaração de Variáveis

Para declarar uma variável em JavaScript, usamos as palavras-chave `var`, `let` ou `const`. Aqui, usaremos `let` para declarar uma variável que pode ter seu valor alterado.

```javascript
let challenge = "Curso Aprenda Do Zero";
let challenge2 = "Einstein disse: 'Eu sabo'";
```

### 2. Imprimindo no Console

Para imprimir no console do navegador, utilizamos o método `console.log()`.

```javascript
console.log(challenge);
```

### 3. Comprimento da String

O comprimento de uma string é obtido através da propriedade `length`.

```javascript
console.log(challenge.length);
```

### 4. Convertendo para Maiúsculas

O método `toUpperCase()` é usado para converter todos os caracteres de uma string em letras maiúsculas.

```javascript
let upperCaseChallenge = challenge.toUpperCase();
console.log(upperCaseChallenge);
```

### 5. Convertendo para Minúsculas

O método `toLowerCase()` é usado para converter todos os caracteres de uma string em letras minúsculas.

```javascript
let lowerCaseChallenge = challenge.toLowerCase();
console.log(lowerCaseChallenge);
```

### 6. Verificar se uma String Contém uma Palavra

O método `includes()` verifica se uma string contém uma determinada sequência de caracteres e retorna `true` ou `false`.

```javascript
console.log(challenge.includes("Script"));
```

### 7. Substituir Parte da String

O método `replace()` é usado para substituir uma parte da string por outra.

```javascript
let newChallenge = challenge.replace("Zero", "Um");
console.log(newChallenge);
```

### 8. Caractere em um Índice Específico

O método `charAt()` retorna o caractere em uma posição específica em uma string. Lembre-se de que o índice começa em 0.

```javascript
let specificString = "Curso de aprenda do zero";
console.log(specificString.charAt(15));
```

### 9. Código do Caractere

O método `charCodeAt()` retorna o código Unicode do caractere em um índice específico.

```javascript
console.log(specificString.charCodeAt(specificString.indexOf("z")));
```

### 10. Remover Espaços em Branco

O método `trim()` remove os espaços em branco do início e do final de uma string.

```javascript
let stringWithSpaces = " Curso Aprenda do Zero ";
let trimmedString = stringWithSpaces.trim();
console.log(trimmedString);
```

### Conceitos Chave

- **Declaração de variáveis**: `let` e `const` são preferíveis a `var` devido ao escopo de bloco.
- **Strings**: São imutáveis em JavaScript; métodos de string retornam novos valores.
- **Métodos de string**: `toUpperCase()`, `toLowerCase()`, `includes()`, `replace()`, `charAt()`, `charCodeAt()`, `trim()` são fundamentais para manipulação de texto.
- **Console**: `console.log()` é amplamente utilizado para depuração e saída de informações.
