import { ProdutoModel } from "./produto.model";

export class PedidoItemModel {

    public produto: ProdutoModel;

    public quantidade: number;

    constructor(produto: ProdutoModel, quantidade: number) {
        this.produto = produto;
        this.quantidade = quantidade;
    }

}