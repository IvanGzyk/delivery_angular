import { Injectable } from "@angular/core";
import { ProdutoModel } from "../models/produto.model";
import { ApiService } from "./api.service";

@Injectable()
export class ProdutoService {

    public produtos: ProdutoModel[] = [];

    constructor(private apiService: ApiService) {

        apiService.getProdutos().subscribe({
            next: (produtos: ProdutoModel[]) => {
                // console.log(produtos);
                this.produtos.push( ...produtos);
            }
        });

    }

}
