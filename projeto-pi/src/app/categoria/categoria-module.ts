import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing-module';
import { Cadastro } from './cadastro/cadastro';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [Cadastro, Listagem],
  imports: [CommonModule, CategoriaRoutingModule],
})
export class CategoriaModule {}
