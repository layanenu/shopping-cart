require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('Teste se fetchProducts é uma função', ()=>{
    expect(typeof fetchProducts).toBe('function')
  })
  test('Teste se fetchProducts é chamada ao receber o argumento computador', async ()=>{
    await fetchProducts('computador')
    expect(fetch).toBeCalled()
  })
  test('Teste se, ao chamar a função fetchProducts com o argumento computador, a função fetch utiliza o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador', async ()=>{
    await fetchProducts('computador')
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })
  test('Teste se o retorno da função fetchProducts com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async ()=>{
    expect(await fetchProducts('computador')).toEqual(computadorSearch)    
  })
  test('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async ()=>{
    await fetchProducts()
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));    
  })
});