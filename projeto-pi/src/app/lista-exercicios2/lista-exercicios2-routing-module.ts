import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1 } from '../ListaExercicios2/ex1/ex1';
import { Ex2 } from '../ListaExercicios2/ex2/ex2';
import { Ex3 } from '../ListaExercicios2/ex3/ex3';
import { Ex4 } from '../ListaExercicios2/ex4/ex4';
import { Ex5 } from '../ListaExercicios2/ex5/ex5';

const routes: Routes = [
  {
    path: 'ex1', component: Ex1
  },
  {
    path: 'ex2', component: Ex2
  },
  {
    path: 'ex3', component: Ex3
  },
  {
    path: 'ex4', component: Ex4
  },
  {
    path: 'ex5', component: Ex5
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExercicios2RoutingModule {}
