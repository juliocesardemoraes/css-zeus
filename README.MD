## **Arrays em JavaScript**

Um **array** é uma estrutura de dados que permite armazenar vários valores em uma única variável. Em vez de declarar várias variáveis individuais para armazenar cada dado, você pode usar um array para agrupar todos esses valores.

### **Criando Arrays**

Você pode criar um array em JavaScript de várias maneiras. Aqui estão os exemplos mais comuns:

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];
let numeros = [1, 2, 3, 4, 5];
```

### **Ler Elementos do Array**

Os elementos do array são indexados começando de `0`. Para acessar um valor, usamos o índice.

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];

// Acessar o primeiro elemento
console.log(frutas[0]); // "Maçã"

// Acessar o terceiro elemento
console.log(frutas[2]); // "Laranja"
```

### **Inserir Elementos no Array**

Existem várias maneiras de adicionar elementos a um array:

#### 1. **Inserir no Final (`push`)**

```javascript
let frutas = ["Maçã", "Banana"];
frutas.push("Laranja"); // Adiciona "Laranja" ao final do array
console.log(frutas); // ["Maçã", "Banana", "Laranja"]
```

#### 2. **Inserir no Início (`unshift`)**

```javascript
let frutas = ["Maçã", "Banana"];
frutas.unshift("Laranja"); // Adiciona "Laranja" no início do array
console.log(frutas); // ["Laranja", "Maçã", "Banana"]
```

#### 3. **Inserir em Posições Específicas (`splice`)**

```javascript
let frutas = ["Maçã", "Banana"];
frutas.splice(1, 0, "Laranja"); // Adiciona "Laranja" na posição 1
console.log(frutas); // ["Maçã", "Laranja", "Banana"]
```

### **Atualizar Elementos no Array**

Para atualizar um elemento, você pode atribuir um novo valor diretamente ao índice correspondente.

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];

// Atualizar o segundo elemento
frutas[1] = "Uva";
console.log(frutas); // ["Maçã", "Uva", "Laranja"]
```

### **Remover Elementos do Array**

#### 1. **Remover do Final (`pop`)**

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];
frutas.pop(); // Remove o último elemento ("Laranja")
console.log(frutas); // ["Maçã", "Banana"]
```

#### 2. **Remover do Início (`shift`)**

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];
frutas.shift(); // Remove o primeiro elemento ("Maçã")
console.log(frutas); // ["Banana", "Laranja"]
```

#### 3. **Remover de Posições Específicas (`splice`)**

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];
frutas.splice(1, 1); // Remove 1 elemento a partir da posição 1 ("Banana")
console.log(frutas); // ["Maçã", "Laranja"]
```

### **Iterando Sobre Arrays (Loops)**

#### 1. **`for` Tradicional**

O `for` loop é um dos métodos mais comuns para percorrer um array.

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]); // Acessa cada elemento
}
```

#### 2. **`for...of` (Mais Simples)**

O `for...of` loop facilita a leitura de arrays sem a necessidade de um índice.

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];

for (let fruta of frutas) {
  console.log(fruta); // Acessa cada elemento diretamente
}
```

#### 3. **`forEach`**

O método `forEach` é uma maneira funcional de percorrer arrays.

```javascript
let frutas = ["Maçã", "Banana", "Laranja"];

frutas.forEach(function (fruta) {
  console.log(fruta); // Acessa cada elemento diretamente
});
```

#### 4. **`map`**

O `map` também percorre os elementos do array, mas cria um **novo array** com base nos resultados da função aplicada a cada elemento.

```javascript
let numeros = [1, 2, 3, 4, 5];

let dobrados = numeros.map(function (numero) {
  return numero * 2; // Multiplica cada elemento por 2
});

console.log(dobrados); // [2, 4, 6, 8, 10]
```

### **Dicas Adicionais**

- **Tamanho do Array**: Você pode verificar o tamanho do array usando `length`.

  ```javascript
  let frutas = ["Maçã", "Banana"];
  console.log(frutas.length); // 2
  ```

- **Arrays Multidimensionais**: Arrays podem conter outros arrays, formando uma estrutura de matriz.

  ```javascript
  let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];

  console.log(matriz[0][1]); // Acessa o elemento 2 da primeira linha: 2
  ```
