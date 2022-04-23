import { HttpClient, HttpHeaderResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PedidoItemModel } from "../models/pedido.item.model";
import { PedidoModel } from "../models/pedido.model";
import { ProdutoModel } from "../models/produto.model";

@Injectable()
export class PedidoService {

  constructor(private httpClient: HttpClient) { }

  public pedido: PedidoModel = new PedidoModel();

  public adicionarItem(produto: ProdutoModel): void {

    const item = this.pedido.itens.find(item => item.produto.uuid === produto.uuid);

    if (item) {
      item.quantidade++;
    } else {
      this.pedido.itens.push(new PedidoItemModel(produto, 1));
    }

    if (!this.pedido.total) {
      this.pedido.total = 0;
    }

    this.pedido.total += produto.preco;

  }

  public removerItem(produto: ProdutoModel): void {

    const item = this.pedido.itens.find(item => item.produto.uuid === produto.uuid);

    if (item) {

      item.quantidade--;

      if (!this.pedido.total) {
        this.pedido.total = 0;
      }

      this.pedido.total -= produto.preco;

      if (item.quantidade === 0) {
        this.pedido.itens.splice(this.pedido.itens.indexOf(item), 1);
      }

    }

  }

  public salvarPedido(pedido: PedidoModel) {
    // console.log(pedido)
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiQWRyaWFubyIsInV1aWQiOiI3ZTk3NzlmNi0xNWRhLTQ0NTctYjdlZS1lMDI2MzI5Y2I2MDUiLCJ1c2VyX25hbWUiOiJhZHJpYW5vQGdtYWlsLmNvbSIsImp0aSI6IjhmOWRmNzM1LTEwNmEtNDA2NC1iZTViLWNmMWE4YWZmMmM3NyIsImNsaWVudF9pZCI6ImRlbGl2ZXJ5Iiwic2NvcGUiOlsiUkVBRCIsIldSSVRFIl19.BwR4Rk2S6YjJDnRjrYfA1QbUnZuPR606xMyFW6Hicdw"
    })
    const body = {
      "cliente": pedido.cliente,
      "itens": pedido.itens
    }
    console.log(body)
    return this.httpClient.post<PedidoModel[]>("http://localhost:8080/pedidos", body, { headers: headers });

  }

}
