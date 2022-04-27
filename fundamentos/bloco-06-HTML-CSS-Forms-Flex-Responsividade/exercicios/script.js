const buttonEnviar = document.getElementById("btn-enviar");
const inputName = document.getElementById("nome-completo");
const inputEmail = document.getElementById("input-email");
const textArea = document.getElementById("textArea");
const acordo = document.getElementById("image-checkbox");

function checkInputName(inputValue) {
  if (inputValue.value.length > 10 || inputValue.value.length > 40) {
    return false;
  }
}
function checkInputEmail(inputValue) {
  if (inputValue.value.length > 10 || inputValue.value.length > 50) {
    return false;
  }
}
function checkTextArea(inputValue) {
  input.innerText = "exemplo";
  if (inputValue.value.length > 500) {
    return false;
  }
}

function checkedAction() {
  buttonEnviar.disabled = !acordo.checked;
  // quando o checkbox estiver marcado o botão estará habilitado para validar as informações
  //do contrário pedirá para o checked ser marcado
}
window.onload = () => {
  acordo.addEventListener("change", checkedAction);
  buttonEnviar.addEventListener("click", () => {
    console.log(checkInputName(inputName));
    console.log(checkInputEmail(inputEmail));
    console.log(checkTextArea(textArea));
  });
};
