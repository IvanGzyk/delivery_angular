import { PedidoItemModel } from "./pedido.item.model";

export class PedidoModel {

    public cliente: string;
    public itens: PedidoItemModel[];
    public total?: number;

    constructor(cliente: string = "", itens: PedidoItemModel[] = []) {
        
        this.cliente = cliente;
        this.itens = itens;
        
        this.total = 0;

        for (let item of this.itens) {
            this.total += item.produto.preco;
        }

    }
    
}