import { Component, OnInit } from '@angular/core';
import { PedidoModel } from 'src/app/models/pedido.model';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  // public itens: PedidoItemModel[] = [
  //   new PedidoItemModel( new ProdutoModel("1", "Coca-cola 600ml", 5.5), 1 ),
  //   new PedidoItemModel( new ProdutoModel("2", "Coxinha com requeijão", 6.0), 2),
  //   new PedidoItemModel( new ProdutoModel("3", "Sorvete de morango", 4.0), 5)
  // ];

  // public pedido: PedidoModel = {
  //   cliente: "1",
  //   itens: this.itens
  // };

  // public pedido: PedidoModel = {
  //   cliente: "1",
  //   itens: [
  //     new PedidoItemModel( new ProdutoModel("1", "Coca-cola 600ml", 5.5), 1 ),
  //     new PedidoItemModel( new ProdutoModel("2", "Coxinha com requeijão", 6.0), 2),
  //     new PedidoItemModel( new ProdutoModel("3", "Sorvete de morango", 4.0), 5)
  //   ]
  // };

  public pedido: PedidoModel;

  constructor(private pedidoService: PedidoService) {
    this.pedido = pedidoService.pedido;
  }

  ngOnInit(): void {

    // console.log(this.pedido.itens);
    this.pedido.total = 0;
        for (let item of this.pedido.itens) {
          this.pedido.total += item.produto.preco;
            // console.log(this.pedido.total);
        }

  }
  public salvar(pedido: PedidoModel): void {

    if (pedido) {
      this.pedidoService.salvarPedido(pedido);
    }

  }

}
