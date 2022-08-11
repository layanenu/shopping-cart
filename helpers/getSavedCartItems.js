const getSavedCartItems = () => 
  // seu código aqui
   localStorage.getItem('cartItems');

  //  const getSavedCartItems = (key) => JSON.parse(localStorage.getItem(key));

// passa uma string e retorna um objeto

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}