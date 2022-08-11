const CARTITEMS = '.cart__items';
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const adicionaProduto = async () => {
  const data = await fetchProducts('computador');
  const items = document.querySelector('.items');
  const { results } = data;
  results.forEach((element) => {
    const { id: sku, title: name, thumbnail: image } = element;
    const product = createProductItemElement({ sku, name, image });
    items.appendChild((product));
 });
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => {
  // coloque seu código aqui
  event.target.remove();
  const cartItems = document.querySelector(CARTITEMS);
  const itensNoCarrinho = cartItems.innerHTML;
  saveCartItems(itensNoCarrinho);
};

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const adicionaItemAoCarrinho = async (id) => {
  const data = await fetchItem(id);
  const cartItems = document.querySelector(CARTITEMS);
  const { id: sku, title: name, price: salePrice } = data;
  const product = createCartItemElement({ sku, name, salePrice });
  cartItems.appendChild((product));
  const itensNoCarrinho = cartItems.innerHTML;
  saveCartItems(itensNoCarrinho);
};

// const renderItems = () => {
//   const itemsSalvos = document.querySelector('.cart__items');
//   itemsSalvos.innerHTML = '';  
//   const array = [];
//   array.forEach((element) => {
//     const produto = createCartItemElement(element);
//     itemsSalvos.appendChild(produto);
//   });
// };

const listCardItens = () => {
  const listSaveCardItems = getSavedCartItems('cartItems');
  const cartItems = document.querySelector(CARTITEMS);
  cartItems.innerHTML = listSaveCardItems.trim();

  const cartItem = document.querySelectorAll('.cart__item');
  cartItem.forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

// const removeItens = () => {
//   const cartItems = document.querySelector('.cart__items');
//   // cartItems.filter(() => {

//   // });
// };

const listenerItems = () => {
  const buttons = document.querySelectorAll('.item__add');
  // console.log(buttons);
  buttons.forEach((element) => {
    const parent = element.parentElement;
    const primeiroFilho = parent.firstChild;
    // console.log(primeiroFilho);
    element.addEventListener('click', () => {
      adicionaItemAoCarrinho(primeiroFilho.innerText);
      // além de adicionar ao carrinho quero adc ao local storage
      // salvar os dados que já estao carregados
      // os dados da lista ja estao salvos em algum lugar
    });
  });
};

window.onload = async () => {
  await adicionaProduto();
  listenerItems();
  listCardItens();
  // renderItems();
};
