require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('Teste se fetchItem é uma função', ()=>{
    expect(typeof fetchItem).toBe('function')
  })
  test('Teste se fetchItem é chamada ao receber o argumento MLB1615760527', async ()=>{
    await fetchItem('MLB1615760527')
    expect(fetch).toBeCalled()
  })
  test('Teste se, ao chamar a função fetchItem com o argumento MLB1615760527, a função fetch utiliza o endpoint https://api.mercadolibre.com/items/MLB1615760527', async ()=>{
    await fetchItem('MLB1615760527')
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  })
  test('Teste se o retorno da função fetchItem com o argumento MLB1615760527 é uma estrutura de dados igual ao objeto item', async ()=>{
    expect(await fetchItem('MLB1615760527')).toEqual(item)    
  })
  test('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async ()=>{
    await fetchItem()
    expect(await fetchItem()).toEqual(new Error('You must provide an url'));    
  })
});
