import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ex1 } from '../ListaExercicios/ex1/ex1';
import { Ex2 } from '../ListaExercicios/ex2/ex2';
import { Ex3 } from '../ListaExercicios/ex3/ex3';

const routes: Routes = [
  {
    path: 'ex1', component: Ex1
  },
  {
    path: 'ex2', component: Ex2
  },
  {
    path: 'ex3', component: Ex3
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaExerciciosRoutingModule {}
