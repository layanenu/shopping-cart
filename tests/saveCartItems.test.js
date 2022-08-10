const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', async ()=>{
    await saveCartItems('<ol><li>Item</li></ol>')
    expect(fetch).toBeCalled('localStorage.setItem')
  })
  test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros', async ()=>{
    await saveCartItems('<ol><li>Item</li></ol>')
    expect(fetch).toBeCalled(localStorage.setItem(cartItems, argumento))
  })
});
