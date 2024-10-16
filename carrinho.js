// lógica do carrinho de compras
export class Carrinho {
    constructor() {
        this.produtos = []; // inicia array
    }

    adicionarProduto(produtoNome) {
        if (this.produtos.includes(produtoNome)) {
            return false; 
        }
        this.produtos.push(produtoNome); 
        return true; 
    }

    removerProduto(produtoNome) {
        this.produtos = this.produtos.filter(produto => produto !== produtoNome); 
    }

    listarProdutos() {
        return this.produtos; 
    }
}
