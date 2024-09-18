// 6. Criar uma Lista Dinâmica
// Crie um formulário que aceite o nome e a idade de uma pessoa.
// Ao submeter o formulário,
// adicione um novo item em uma
// lista de usuários com essas informações.
// Você vai usar: createElement, getElementById,
// append, textContent, preventDefault, function

function createUser(event) {
  event.preventDefault();
  // pegar valores do form usando formData
  const formData = new FormData(event.target);
  console.log(event.target);
  const nome = formData.get("name");
  const idade = formData.get("age");

  // criar um elemento li com esses valores
  const liTag = document.createElement("li");
  liTag.textContent = `${nome}: ${idade}`;
  // nome + ": "  + idade

  // pegar a lista de usuários
  const userList = document.getElementById("userlist");
  // inserir o elemento li na lista de usuários
  userList.append(liTag);

  event.target.reset();
}
