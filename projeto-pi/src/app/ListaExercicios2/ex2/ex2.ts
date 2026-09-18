import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2',
  imports: [],
  templateUrl: './ex2.html',
  styleUrl: './ex2.scss',
})
export class Ex2 {
  usuarioLogado: boolean = false;

  alternarLogin() {
  this.usuarioLogado = !this.usuarioLogado;
}

}
