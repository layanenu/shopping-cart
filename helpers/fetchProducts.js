const fetchProducts = async (parametro) => {
  // seu código aqui
  if (!parametro) {
    return new Error('You must provide an url');
  } if (parametro === 'computador') {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${parametro}`;
  const request = await fetch(url);
  const data = await request.json();
  return data;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
