const API_URL = 'https://icanhazdadjoke.com/';
const ol = document.getElementById('olJoke');

const fetchJoke = async () => {
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  const result = await fetch(API_URL, myObject);
  const data = await result.json();
  return data;
};

const creatList = async () => {
  const li = document.createElement('li');
  const liContent = await fetchJoke();
  li.innerHTML = liContent.joke;
  ol.appendChild(li);
};
window.onload = () => {
  creatList();
};
