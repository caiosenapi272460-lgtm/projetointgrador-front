import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4',
  imports: [],
  templateUrl: './ex4.html',
  styleUrl: './ex4.scss',
})
export class Ex4 {
   nomeProduto: string = 'Teclado';
  quantidadeEstoque: number = 5;

  adicionarEstoque() {
    this.quantidadeEstoque++;
  }

  removerEstoque() {
    if (this.quantidadeEstoque > 0) {
      this.quantidadeEstoque--;
    }
  }
}
