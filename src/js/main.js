// Pegar dados do textarea
const textareaContent = document.getElementById("message");

const saveData = () => {
  console.log("CHAMOu", textareaContent.value);
  // Guardar no localstorage - OK
  localStorage.setItem("notas", textareaContent.value);
};

// Quando iniciar pegar os dados guardados
// e popular textarea
const fetchData = () => {
  console.log("Fetch", textareaContent.value);
  textareaContent.value = localStorage.getItem("notas");
};

window.saveData = saveData;
window.fetchData = fetchData;
