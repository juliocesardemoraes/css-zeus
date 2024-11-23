const mostrarInfo = () => {
  const items = document.getElementById("items");
  items.style.marginLeft = "0px";
};

const esconderInfo = () => {
  const items = document.getElementById("items");
  items.style.marginLeft = "2000px";
};

window.mostrarInfo = mostrarInfo;
window.esconderInfo = esconderInfo;
