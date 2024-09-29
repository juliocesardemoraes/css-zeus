# JavaScript `for` Loop

## Introdução

O loop `for` em JavaScript é usado para repetir uma série de instruções dado um número específico de vezes.

## Estrutura do Loop `for`

A estrutura básica de um loop `for` em JavaScript é:

```javascript
for (inicialização; condição; incremento / decremento) {
  // Código a ser executado repetidamente
}
```

- **Inicialização**: Define uma variável de controle e é executada uma única vez no início do loop.
- **Condição**: A cada iteração, a condição é avaliada. Se for `true`, o loop continua; se for `false`, o loop é encerrado.
- **Incremento/decremento**: Após cada iteração, o incremento/decremento é executado para atualizar o valor da variável de controle.

### Exemplo:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(`Iteração número: ${i}`);
}
```

**Explicação:**

1. **Inicialização**: `let i = 0` — a variável `i` é inicializada com o valor 0.
2. **Condição**: `i < 5` — enquanto `i` for menor que 5, o loop continuará.
3. **Incremento**: `i++` — a cada iteração, `i` será incrementado em 1.

Saída do código:

```
Iteração número: 0
Iteração número: 1
Iteração número: 2
Iteração número: 3
Iteração número: 4
```

## Exemplo Prático: Somar Números de 1 a 10

```javascript
let soma = 0;

for (let i = 1; i <= 10; i++) {
  soma += i;
}

console.log(`A soma dos números de 1 a 10 é: ${soma}`);
```

**Explicação:**

1. O loop começa com `i` em 1 e executa até `i` ser 10.
2. Em cada iteração, o valor de `i` é adicionado à variável `soma`.
3. No final, o resultado é a soma dos números de 1 a 10.

Saída esperada:

```
A soma dos números de 1 a 10 é: 55
```

## Loop `for` Invertido

É possível criar loops que diminuem o valor da variável de controle. Por exemplo, contar de 10 a 1:

```javascript
for (let i = 10; i > 0; i--) {
  console.log(i);
}
```

Saída esperada:

```
10
9
8
7
6
5
4
3
2
1
```

## Quando Usar o Loop `for`

Use o loop `for` quando:

- Precisar de iterar sobre valores dinâmicos.
- Repetir uma execução de um bloco de código.
