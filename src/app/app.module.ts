import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { PedidoComponent } from './components/pedido/pedido.component';
import { PedidoService } from './services/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from './services/produto.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdutosComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    PedidoService,
    ProdutoService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
