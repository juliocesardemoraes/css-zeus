## Estruturas Condicionais em JavaScript

### 1. `if` Statement

A estrutura `if` permite que você execute um bloco de código somente se uma condição especificada for verdadeira.

**Sintaxe:**

```javascript
if (condição) {
  // código a ser executado se a condição for verdadeira
}
```

**Exemplo:**

```javascript
let idade = 18;

if (idade >= 18) {
  console.log("Você é maior de idade.");
}
```

_Saída:_

```
Você é maior de idade.
```

### 2. `if...else` Statement

A estrutura `if...else` permite que você execute um bloco de código se a condição for verdadeira e outro bloco se a condição for falsa.

**Sintaxe:**

```javascript
if (condição) {
  // código a ser executado se a condição for verdadeira
} else {
  // código a ser executado se a condição for falsa
}
```

**Exemplo:**

```javascript
let idade = 16;

if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}
```

_Saída:_

```
Você é menor de idade.
```

### 3. `if...else if...else` Statement

Para múltiplas condições, você pode encadear várias cláusulas `else if`.

**Sintaxe:**

```javascript
if (condição1) {
  // código se condição1 for verdadeira
} else if (condição2) {
  // código se condição2 for verdadeira
} else {
  // código se nenhuma das condições anteriores for verdadeira
}
```

**Exemplo:**

```javascript
let nota = 85;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else {
  console.log("F");
}
```

_Saída:_

```
B
```

## Operadores Lógicos

Os operadores lógicos permitem combinar múltiplas condições.

### 1. AND (`&&`)

Retorna `true` se **todas** as condições forem verdadeiras.

**Exemplo:**

```javascript
let idade = 25;
let possuiCarteira = true;

if (idade >= 18 && possuiCarteira) {
  console.log("Pode dirigir.");
} else {
  console.log("Não pode dirigir.");
}
```

_Saída:_

```
Pode dirigir.
```

### 2. OR (`||`)

||

Retorna `true` se **pelo menos uma** das condições for verdadeira.

**Exemplo:**

```javascript
let dia = "sábado";

if (dia === "sábado" || dia === "domingo") {
  console.log("É fim de semana.");
} else {
  console.log("É dia de semana.");
}
```

_Saída:_

```
É fim de semana.
```

### 3. NOT (`!`)

Inverte o valor booleano de uma condição.

**Exemplo:**

```javascript
let estaChovendo = false;

if (!estaChovendo) {
  console.log("Você pode sair sem guarda-chuva.");
} else {
  console.log("Leve um guarda-chuva.");
}
```

_Saída:_

```
Você pode sair sem guarda-chuva.
```

## Pontos de atenção!

1. **Uso Incorreto de Operadores de Comparação:**
   Um igual `=` comparação, dois iguais `==` comparação de valor, três iguais `===` comparação de valor e tipo

   - Um igual `=`: atribuição
   - Dois iguais `==`: comparação de valor
   - Três iguais `===`: comparação de valor e tipo(String,Number,Null,Boolean,etc...)

   - **Erro:** Usar um único `=` ao invés de `==` ou `===` em condições.
   - **Exemplo:**

     ```javascript
     let idade = 18; // ATRIBUIÇÃO

     if ((idade = 18)) {
       // Isso atribui 18 a idade, sempre verdadeiro
       console.log("Idade igual a 18.");
     }
     ```

   - **Correção:**
     ```javascript
     if (idade === 18) {
       console.log("Idade igual a 18.");
     }
     ```

2. **Condições Sempre Verdadeiras ou Falsas:**

   - **Erro:** Escrever condições que sempre avaliam para `true` ou `false`.
   - **Exemplo:**

     ```javascript
     if (5 > 3) {
       // 5 sempre vai ser maior do que 3 é sempre verdadeira
       console.log("Isto sempre será exibido.");
     }

     if (true) {
       // 5 sempre vai ser maior do que 3 é sempre verdadeira
       console.log("Isto sempre será exibido.");
     }
     ```

   - **Correção:** Certifique-se de que as condições são baseadas em variáveis ou expressões dinâmicas.

3. **Tipos de Dados Diferentes em Comparações:**

   - **Erro:** Comparar valores de tipos diferentes sem cuidado pode levar a resultados inesperados.
   - **Exemplo:**
     ```javascript
     let numero = "5";
     if (numero === 5) {
       // Falso, porque tipos são diferentes
       console.log("É igual.");
     } else {
       console.log("Não é igual.");
     }
     ```
   - **Saída:**
     ```
     Não é igual.
     ```
   - **Solução:** Use `===` para comparação estrita ou converta os tipos apropriadamente.

4. **Uso Incorreto de `else if`:**

   - **Erro:** Escrever `elseif` ou outros formatos incorretos.
   - **Exemplo:**
     ```javascript
     if (condição1) {
         // ...
     } elseif (condição2) { // Incorreto
         // ...
     }
     ```
   - **Correção:** Use `else if` separado.
     ```javascript
     if (condição1) {
       // ...
     } else if (condição2) {
       // ...
     }
     ```

5. **Esquecendo de Finalizar Com `else`:**

   - **Erro:** Não fornecer um bloco `else` quando necessário pode deixar casos não tratados.
   - **Exemplo:**

     ```javascript
     let score = 75;

     if (score >= 90) {
       console.log("A");
     } else if (score >= 80) {
       console.log("B");
     }
     // O que acontece se score for 70?
     ```

   - **Solução:** Sempre considere um `else` para tratar todos os casos.
     ```javascript
     if (score >= 90) {
       console.log("A");
     } else if (score >= 80) {
       console.log("B");
     } else {
       console.log("C ou abaixo.");
     }
     ```

## Dicas para Evitar Pegadinhas

- **Dê preferência aos operadores `===` e `!==`:** Prefira a comparação estrita para evitar conversões de tipo inesperadas.

  ```javascript
  if (valor === 10) {
    // Melhor do que valor == 10
    // ...
  }
  ```
