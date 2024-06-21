import { produtorep } from "../models/Produto";
import { Produto } from "../models/Produto";
interface IProdutoService{
    pegarTodos(): Promise<Produto[]>
    criarProduto(Produto: Produto): Promise<Produto>
}

export class ProdutoService implements IProdutoService{
async criarProduto(produto: Produto): Promise<Produto> {
    const newProduto = produtorep.create(produto);
    await produtorep.save(newProduto);
    return newProduto;
}
async pegarTodos(): Promise<Produto[]> {
const produtos = await produtorep.find();
return produtos;
}
}