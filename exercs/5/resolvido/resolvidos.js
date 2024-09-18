// 5. Formulário com Validação Simples
// Crie um formulário com campos de nome e email, senha e confirmação
// de senha.
// Ao submeter o formulário, verifique se todos os campos estão preenchidos
// e se o campo de confirmação de senha tem o mesmo valor do campo senha.
// Você vai usar: getElementById, append, alert, preventDefault

function createUser(event) {
  console.log(event.target);
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log(formData.get("name"));
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const passwordCheck = formData.get("password-check");

  if (!name || !email || !password || !passwordCheck) {
    alert("Campos vazios");
  }

  if (password !== passwordCheck) {
    alert("Senhas diferentes");
  }
}
