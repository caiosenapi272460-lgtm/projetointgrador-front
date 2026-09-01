import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing-module';
import { Cadastro } from './cadastro/cadastro';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [Cadastro, Listagem],
  imports: [CommonModule, ProdutosRoutingModule],
})
export class ProdutosModule {}
