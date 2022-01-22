const api = 'https://api.coincap.io/v2/assets';

const criptApi = () => {
  console.log(api)
  
  fetch(api)
    .then(response => response.json)
    .then(data => console.log(data))
};

window.onload = () => criptApi();
