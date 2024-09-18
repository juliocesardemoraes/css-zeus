/*
      <li>João</li>
      <li>José</li>
      <li>Júlio</li>
      <li>Ibra</li>
      <li>Joseph</li>
*/

const userList = ["Abrra", "João", "José", "Júlio", "Ibra", "Joseph"];

// CRUD - Criação, leitura(read),
// atualização(update), deleção

const users = document.getElementById("users");

function addUser(nome, i) {
  let userTag = document.createElement("li");
  userTag.textContent = nome;
  userTag.id = i;
  users.append(userTag);
}

for (let i = 0; i < userList.length; i++) {
  addUser(userList[i], i);
}

const userToDelete = document.getElementById("0");
userToDelete.remove();
