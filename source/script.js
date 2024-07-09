//Função para as imagens passarem regurlarmente no slider
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  proximaImagem();
}, 3500);

function proximaImagem() {
  count++;
  if (count > 8) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;
}
//Fim da função do slider
