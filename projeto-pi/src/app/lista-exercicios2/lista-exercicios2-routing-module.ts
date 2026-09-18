import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1 } from '../ListaExercicios2/ex1/ex1';
import { Ex2 } from '../ListaExercicios2/ex2/ex2';

const routes: Routes = [
  {
    path: 'ex1', component: Ex1
  },
  {
    path: 'ex2', component: Ex2
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios2RoutingModule {}
