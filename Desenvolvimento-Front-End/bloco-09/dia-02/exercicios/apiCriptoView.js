const API_COINCAP = 'https://api.coincap.io/v2/assets';

const tdCriptoName = document.getElementById('nomeCripto');
const tdCriptoSymbol = document.getElementById('symbolCripto');
const tdCriptoPrice = document.getElementById('priceCripto');
const tableBody = document.getElementById('tbody');

//Dados da api
const mapResponse = async () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };
  const result = await fetch(API_COINCAP, myObject);
  const response = await result.json();
  return response.data;
};

const createTableRows = async () => {
  const apiData = await mapResponse();
  const arrData = apiData.slice(0, 10);

  for (let i = 0; i < arrData.length; i++) {
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdSymbol = document.createElement('td');
    const tdPrice = document.createElement('td');
    tr.id = `tr-${i}`;
    tr.appendChild(tdName);
    tr.appendChild(tdSymbol);
    tr.appendChild(tdPrice);
    tdName.innerHTML = arrData[i].name;
    tdSymbol.innerHTML = arrData[i].symbol;
    tdPrice.innerHTML = `$ ${arrData[i].priceUsd}`;
    tableBody.appendChild(tr);
  }
};

window.onload = async () => {
  createTableRows();
};
