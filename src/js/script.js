import{ addProduct, loadProducts} from './produtos.js';

document.getElementById('addBotao').addEventListener('click', addProduct);

loadProducts();