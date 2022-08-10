// const fetch = require('node-fetch');

const fetchItem = async (id) => {
  // seu código aqui
if (!id) {
  return new Error('You must provide an url');
} 
const url = `https://api.mercadolibre.com/items/${id}`;
const request = await fetch(url);
const data = await request.json();
// console.log(data);

return data;
};

// fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
