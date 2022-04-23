export class ProdutoModel {

    public uuid: string;
    public nome: string;
    public preco: number;

    constructor(uuid: string, nome: string, preco: number) {
        this.uuid = uuid;
        this.nome = nome;
        this.preco = preco;
    }

}