const saveCartItems = (itensNoCarrinho) => {
  // seu código aqui
  localStorage.setItem('cartItems', itensNoCarrinho);
};

// const saveCartItems = (key, item) => {
//   // seu código aqui
//   localStorage.setItem(key, JSON.stringify(item));
// };

// passa um objeto e retorna uma string

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
