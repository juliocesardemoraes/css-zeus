## Aula de DOM(Document Object Model)

O DOM (Document Object Model) é uma interface de programação que permite manipular documentos HTML e XML. Ele representa a página web como uma estrutura de árvore, onde cada nó é um objeto que pode ser manipulado por meio de JavaScript. A árvore do DOM inclui elementos HTML, seus atributos e o texto dentro dos elementos. Através do DOM, você pode acessar e modificar o conteúdo, estrutura e estilo de uma página web dinamicamente.

### 1. **Acessando Elementos (GET)**

Para acessar elementos no DOM, o JavaScript oferece vários métodos, sendo os mais comuns:

- **`document.getElementById()`**: Seleciona um elemento pelo seu `id`.

  ```javascript
  const elemento = document.getElementById("meuElemento");
  ```

- **`document.getElementsByClassName()`**: Retorna uma lista de elementos que possuem uma determinada classe.

  ```javascript
  const elementos = document.getElementsByClassName("minhaClasse");
  ```

- **`document.getElementsByTagName()`**: Seleciona todos os elementos de uma determinada tag.

  ```javascript
  const paragrafo = document.getElementsByTagName("p");
  ```

- **`document.querySelector()`**: Seleciona o primeiro elemento que corresponde a um seletor CSS.

  ```javascript
  const elemento = document.querySelector(".minhaClasse");
  ```

- **`document.querySelectorAll()`**: Seleciona todos os elementos que correspondem a um seletor CSS.
  ```javascript
  const elementos = document.querySelectorAll(".minhaClasse");
  ```

### 2. **Alterando Elementos**

Você pode modificar o conteúdo, os atributos e até o estilo de elementos do DOM.

- **Alterar o conteúdo (texto ou HTML interno)**:

  - **`innerHTML`**: Modifica o conteúdo HTML de um elemento.

    ```javascript
    elemento.innerHTML = "<strong>Texto alterado</strong>";
    ```

  - **`textContent`**: Modifica apenas o texto de um elemento, sem interpretar como HTML.
    ```javascript
    elemento.textContent = "Novo texto";
    ```

- **Modificar atributos**:

  - **`setAttribute()`**: Altera ou define um novo atributo em um elemento.

    ```javascript
    elemento.setAttribute("class", "novaClasse");
    ```

  - **Modificar diretamente propriedades**:
    ```javascript
    elemento.id = "novoId";
    elemento.src = "novaImagem.jpg"; // Exemplo para uma tag <img>
    ```

### 3. **Inserindo Elementos**

- **`appendChild()`**: Insere um novo elemento como filho de um elemento existente.

  ```javascript
  const novoParagrafo = document.createElement("p");
  novoParagrafo.textContent = "Novo parágrafo!";
  elemento.appendChild(novoParagrafo);
  ```

- **`append()`**: É mais flexível que appendChild() porque pode adicionar múltiplos nós de uma vez e permite adicionar conteúdo de texto.

  ```javascript
  const outroElemento = document.createElement("p");
  outroElemento.textContent = "Mais um novo elemento";

  pai.append(outroElemento, " Texto adicional");

  // Ou como alternativa
  pai.append("Adiciona um texto qualquer no DOM");
  ```

- **`insertBefore()`**: Insere um elemento antes de um elemento de referência.

  ```javascript
  const referencia = document.getElementById("referencia");
  elemento.insertBefore(novoParagrafo, referencia);
  ```

- **`insertAdjacentHTML()`**: Insere HTML em uma posição específica relativa ao elemento.
  ```javascript
  elemento.insertAdjacentHTML("beforeend", "<p>Texto inserido no final.</p>");
  ```

### 4. **Deletando Elementos**

- **`removeChild()`**: Remove um elemento filho de um nó.

  ```javascript
  const pai = document.getElementById("container");
  const filho = document.getElementById("filhoParaRemover");

  pai.removeChild(filho);
  ```

- **`remove()`**: Remove o próprio elemento.
  ```javascript
  const elementoParaRemover = document.getElementById("elementoRemover");
  elementoParaRemover.remove();
  ```

### 5. **Estilizando Elementos**

O estilo de um elemento pode ser alterado diretamente via DOM:

- **Através da propriedade `style`**:

  ```javascript
  elemento.style.color = "red";
  elemento.style.backgroundColor = "blue";
  ```

- **Adicionando/removendo classes**:

  - **`classList.add()`**: Adiciona uma nova classe a um elemento.

    ```javascript
    elemento.classList.add("novaClasse");
    ```

  - **`classList.remove()`**: Remove uma classe existente.

    ```javascript
    elemento.classList.remove("classeExistente");
    ```

  - **`classList.toggle()`**: Alterna uma classe, adicionando-a se não existir, ou removendo-a se já existir.
    ```javascript
    elemento.classList.toggle("classeAtiva");
    ```

### 6. **Outros Conceitos Importantes**

- **Eventos**: Você pode associar manipuladores de eventos a elementos DOM para reagir a interações do usuário, como cliques e teclas pressionadas.

  ```javascript
  elemento.addEventListener("click", () => {
    alert("Elemento clicado!");
  });
  ```

- **Navegação pelo DOM**: Você pode navegar entre os nós do DOM com propriedades como:

  - `parentNode` (nó pai),
  - `children` (nós filhos),
  - `nextElementSibling` (próximo elemento no mesmo nível).

- **Manipulação de Formulários**: O DOM permite acessar e modificar facilmente os valores de formulários, como `input`, `textarea` e `select`.
  ```javascript
  const inputValor = document.querySelector("input").value;
  ```
