export function loadProducts() {
    const productList = document.getElementById('listadeprodutos');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    products.forEach(productName => {
        addProductToList(productName);
    });
}

export function addProduct() {
    const input = document.getElementById('InputProduto');
    const feedback = document.getElementById('feedback');
    const productList = document.getElementById('listadeprodutos');
    
    const productName = input.value.trim();

    feedback.textContent = '';
    input.classList.remove('error');

    if (productName === '') {
        input.classList.add('error');
        feedback.textContent = 'produto inválido.';
        return;
    }

    const verificaproduto = Array.from(productList.getElementsByTagName('li'))
    if(verificaproduto.some(li => li.firstChild.textContent === productName)){
        feedback.textContent = "Produto ja consta em sua na lista.";
        return
    }

    const li = document.createElement('li');
    li.textContent = productName;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = () => li.remove();

    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(productName);
    localStorage.setItem('products', JSON.stringify(products));
    
    li.appendChild(removeButton);
    productList.appendChild(li);

    input.value = '';   
}

function addProductToList(productName) {
    const productList = document.getElementById('listadeprodutos');

    const li = document.createElement('li');
    li.textContent = productName;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = () => {
        li.remove();
        removeProductFromStorage(productName);
    };

    li.appendChild(removeButton);
    productList.appendChild(li);
}

function removeProductFromStorage(productName) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = products.filter(product => product !== productName);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
}