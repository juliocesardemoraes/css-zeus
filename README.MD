## Aprofundando em objetos

Objetos são um dos conceitos centrais no JavaScript. Eles são usados para armazenar coleções de dados relacionados e funcionalidades.

Como já expliquei em outras aulas objetos são estrutura de dados compostas :

- **Primitivos**: Dados simples e imutáveis (número, string, boolean, etc.).
- **Compostos**: Estruturas complexas que podem armazenar múltiplos valores (arrays, objetos).

### Tipos Primitivos em JavaScript

Os **tipos primitivos** são os tipos de dados básicos e imutáveis em JavaScript. Eles são chamados de "primitivos" porque são os blocos fundamentais de dados. Em JavaScript, existem alguns tipos primitivos:

1. **`string`**: Representa texto.

   ```javascript
   let nome = "João";
   ```

2. **`number`**: Representa números, tanto inteiros quanto de ponto flutuante.

   ```javascript
   let idade = 25;
   let pi = 3.14;
   ```

3. **`boolean`**: Representa valores lógicos: `true` (verdadeiro) ou `false` (falso).

   ```javascript
   let estaLogado = true;
   ```

4. **`undefined`**: Representa a ausência de valor. Variáveis que são declaradas, mas não inicializadas, têm o valor `undefined`.

   ```javascript
   let x; // undefined
   ```

5. **`null`**: Representa a ausência intencional de valor. É um valor que pode ser atribuído explicitamente a uma variável.

   ```javascript
   let y = null;
   ```

### Tipos não tão utilizados

6. **`symbol`**: Um valor único e imutável usado como identificador (geralmente avançado).

   ```javascript
   let sym = Symbol("id");
   ```

7. **`bigint`**: Um tipo numérico para representar números inteiros muito grandes.
   ```javascript
   let bigNumber = 123456789012345678901234567890n;
   ```

### Estruturas de dados compostas

As <b>estruturas de dados compostas</b> em JavaScript permitem armazenar múltiplos valores em uma única variável. As principais estruturas compostas são objetos e arrays.

### Relembrando estruturas de dados primitivas

### O que é um Objeto?

Em JavaScript, um objeto é uma coleção de pares chave-valor. Cada valor pode ser um dado (número, string, boolean, etc.) ou uma função (que então é chamada de "método").

```javascript
const pessoa = {
  nome: "João",
  idade: 30,
};
```

No exemplo acima:

- `nome` e `idade` são **propriedades**. Aliás variáveis primitivas.

### Seletores de Propriedades

Podemos acessar os valores de um objeto de duas maneiras:

1. **Notação de ponto (`.`)**: usada quando a chave do objeto é uma string simples.

   ```javascript
   console.log(pessoa.nome); // João
   ```

2. **Notação de colchetes (`[]`)**: útil quando a chave é armazenada em uma variável ou contém caracteres especiais.

   ```javascript
   console.log(pessoa["idade"]); // 30
   ```

3. **Notação de colchetes para valores dinamicos (`[]`)**: Utilizada para referências dinâmicas.
   ```javascript
   console.log(pessoa["idade"]); // 30
   ```

### Atribuições

Podemos alterar os valores de um objeto da mesma forma que os acessamos.

```javascript
pessoa.idade = 31;
console.log(pessoa.idade); // 31
```

### Adicionando Propriedades

Podemos adicionar novas propriedades a um objeto existente.

```javascript
pessoa.altura = 1.8; // Adicionando nova propriedade
```

### Removendo Propriedades

Podemos remover uma propriedade de um objeto usando o operador `delete`.

```javascript
delete pessoa.altura;
console.log(pessoa.altura); // undefined
```

### Iterando Sobre um Objeto

Podemos usar um laço `for...in` para iterar sobre todas as propriedades de um objeto.

```javascript
for (let chave in pessoa) {
  console.log(chave + ": " + pessoa[chave]);
}
```

### Funções de Objeto

1. **`Object.keys()`**: retorna todas as chaves (propriedades) do objeto.

   ```javascript
   console.log(Object.keys(pessoa)); // ["nome", "idade"]
   ```

2. **`Object.values()`**: retorna todos os valores do objeto.

   ```javascript
   console.log(Object.values(pessoa)); // ["João", 31]
   ```

3. **`Object.entries()`**: retorna um array de arrays, onde cada subarray contém um par chave-valor.
   ```javascript
   console.log(Object.entries(pessoa));
   // [["nome", "João"], ["idade", 31]]
   ```

### Resumo

- Objetos são coleções de pares chave-valor.
- Propriedades podem ser acessadas e modificadas com notação de ponto ou colchetes.
- Podemos adicionar, modificar e remover propriedades ou métodos.

### Exemplo Completo

```javascript
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
};

console.log(carro.marca); // Toyota
```
