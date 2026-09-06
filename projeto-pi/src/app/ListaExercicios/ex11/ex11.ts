import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  imports: [],
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss'
})
export class Ex11 {

  nomeProduto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  aumentarQuantidade() {
    this.quantidade++;
  }

  diminuirQuantidade() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho() {
    this.mensagem = `Adicionado: ${this.quantidade}x ${this.nomeProduto}`;
  }

}