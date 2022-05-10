const verifyEmptyValue = (value1, value2) => {
  if(!value1 || !value2){
    throw new Error ('Valores não passados corretamente');
  }
}

const verifyTypeValue = (value1, value2) =>{
  if(isNaN(value1) || isNaN(value2)){
    throw new Error ('Digite um valor numérico');
  }
}

function sum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    verifyEmptyValue(value1, value2);
    verifyTypeValue(value1, value2);
    const result = parseInt(value1) + parseInt(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  }catch(error){
    document.getElementById('result').innerHTML = `Resultado: ${error.message}`;
  }finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}