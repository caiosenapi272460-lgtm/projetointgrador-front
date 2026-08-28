import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'categoria',
    loadChildren: () =>import('./categoria/categoria-module').then((m) => m.CategoriaModule),
  },
  {
    path: 'produtos',loadChildren: () => import('./produtos/produtos-module').then((m) => m.ProdutosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}