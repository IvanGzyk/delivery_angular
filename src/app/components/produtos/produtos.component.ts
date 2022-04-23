import { Component, OnInit } from '@angular/core'
import { ProdutoModel } from 'src/app/models/produto.model'
import { PedidoService } from 'src/app/services/pedido.service'
import { ProdutoService } from 'src/app/services/produto.service'

import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core'
import localePt from '@angular/common/locales/pt'
import { registerLocaleData } from '@angular/common'
registerLocaleData(localePt)

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
  providers: [{
    provide: LOCALE_ID,
    useValue: "pt-BR"
  },
  {
    provide:  DEFAULT_CURRENCY_CODE,
    useValue: 'BRL'
  },
]
})
export class ProdutosComponent implements OnInit {

  // public produtos: ProdutoModel[] = [
  //   new ProdutoModel("1", "Coca-cola 600ml", 5.5),
  //   new ProdutoModel("2", "Coxinha com requeijão", 6.0),
  //   new ProdutoModel("3", "Sorvete de morango", 4.0),
  // ];

  public produtos: ProdutoModel[];

  constructor(private produtoService: ProdutoService, private pedidoService: PedidoService) {
    this.produtos = produtoService.produtos;
  }

  ngOnInit(): void {
  }

  public adicionar(produto: ProdutoModel): void {

    //const produto = this.produtos.find( produto => produto.uuid === uuid );

    if (produto) {
      this.pedidoService.adicionarItem(produto);
    }

  }

  public remover(uuid: string): void {

    const produto = this.produtos.find( produto => produto.uuid === uuid );

    if (produto) {
      this.pedidoService.removerItem(produto);
    }

  }

}
