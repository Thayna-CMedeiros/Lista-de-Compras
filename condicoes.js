import { Carrinho } from './carrinho.js';

const carrinho = new Carrinho();
const addProdutoButton = document.getElementById('addProduto');
const produtoInput = document.getElementById('produto');
const carrinhoUl = document.getElementById('carrinho');

addProdutoButton.addEventListener('click', () => {
    const produtoNome = produtoInput.value.trim();

    if (produtoNome) {
        if (!carrinho.adicionarProduto(produtoNome)) {
            alert('Esse produto já está no carrinho.');
            produtoInput.value = ''; // limpa input
            return;
        }

        const li = document.createElement('li');
        li.textContent = produtoNome;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => {
            carrinho.removerProduto(produtoNome);
            carrinhoUl.removeChild(li);
        };

        li.appendChild(removeButton);
        carrinhoUl.appendChild(li);
        produtoInput.value = '';
    } else {
        alert('Por favor, insira um produto.');
    }
});
