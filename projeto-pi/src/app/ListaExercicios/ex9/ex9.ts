import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex9',
  imports: [FormsModule],
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss'
})
export class Ex9 {

  nomeProduto = '';
  estoque = 5;

  aumentarEstoque() {
    this.estoque++;
  }

  diminuirEstoque() {
    if (this.estoque > 0) {
      this.estoque--;
    }
  }

}