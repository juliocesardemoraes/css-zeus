# Aprofundando em Números

```
// No VSCODE é possível visualizar esse arquivo formatado pressionando ctrl + shift + v
```

### 1. Soma de Dois Números

Para somar dois números, declaramos duas variáveis numéricas e usamos o operador de soma (`+`).

```javascript
let num1 = 8;
let num2 = 12;
let sum = num1 + num2;
console.log(sum);
```

### 2. Produto de Dois Números

Para multiplicar dois números, usamos o operador de multiplicação (`*`).

```javascript
let num3 = 5;
let num4 = 4;
let product = num3 * num4;
console.log(product);
```

### 3. Divisão e Resto

Para dividir dois números, usamos o operador de divisão (`/`). Para encontrar o resto, usamos o operador módulo (`%`).

```javascript
let dividend = 29;
let divisor = 6;
let quotient = Math.floor(dividend / divisor);
let remainder = dividend % divisor;
console.log(quotient); // Quociente
console.log(remainder); // Resto
```

### 4. Incremento e Decremento

Para incrementar ou decrementar um número, usamos os operadores `++` e `--`, respectivamente.

```javascript
let number = 10;
number++;
console.log(number); // Incremento

number--;
console.log(number); // Decremento
```

### 5. Potenciação

Para elevar um número a uma potência, usamos o operador de exponenciação (`**`).

```javascript
let base = 3;
let exponent = 4;
let power = base ** exponent;
console.log(power);
```

### 6. Operador de Atribuição Composto

Usamos operadores de atribuição compostos para realizar uma operação e atribuição em um único passo (`+=`, `-=`, `*=`, `/=`).

```javascript
let total = 100;
total += 50; // Equivale a total = total + 50;
console.log(total);
```

### 7. Conversão de String para Número

Para converter uma string numérica para um número, usamos `Number()` ou `parseInt()`/`parseFloat()`.

```javascript
let stringNumber = "45";
let convertedNumber = Number(stringNumber);
let result = convertedNumber + 5;
console.log(result);
```

### 8. Calculando a Média

Para calcular a média de números, somamos todos e dividimos pelo número de elementos.

```javascript
let num5 = 20;
let num6 = 35;
let num7 = 45;
let average = (num5 + num6 + num7) / 3;
console.log(average);
```

### 9. Reduzir um Número pela Metade

Para dividir um número pela metade, usamos o operador de divisão (`/`).

```javascript
let value = 88;
let half = value / 2;
console.log(half);
```

### 10. Calcular a Área de um Retângulo

Para calcular a área de um retângulo, multiplicamos o comprimento pela largura.

```javascript
let length = 7;
let width = 5;
let area = length * width;
console.log(area);
```

### Conceitos Chave

- **Operadores Matemáticos**: `+`, `-`, `*`, `/`, `%`, `**` para operações básicas e exponenciação.
- **Operadores de Incremento/Decremento**: `++`, `--` para alterar o valor de uma variável em uma unidade.
- **Operadores de Atribuição Composto**: `+=`, `-=`, `*=`, `/=` simplificam operações e atribuições.
- **Conversão de Tipos**: `Number()`, `parseInt()`, `parseFloat()` para conversão de strings numéricas.
- **Console**: `console.log()` é amplamente utilizado para depuração e saída de informações.
