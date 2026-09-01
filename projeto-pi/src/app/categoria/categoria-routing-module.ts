import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Cadastro } from './cadastro/cadastro';
import { Listagem } from './listagem/listagem';

const routes: Routes = [
  { path: '', redirectTo: 'listagem', pathMatch: 'full' },
  { path: 'cadastro', component: Cadastro },
  { path: 'listagem', component: Listagem },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaRoutingModule {}
