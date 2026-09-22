import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Mouse Gamer',
      preco: 150,
      quantidade: 0
    },
    {
      id: 2,
      nome: 'Teclado',
      preco: 150,
      quantidade: 3
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 800,
      quantidade: 8
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 200,
      quantidade: 5
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 300,
      quantidade: 10
    }
  ];

  classificarEstoque(quantidade: number): string {

    if (quantidade === 0) {
      return 'Sem estoque';

    } else if (quantidade >= 1 && quantidade <= 5) {
      return 'Estoque baixo';

    } else {
      return 'Estoque disponível';
    }
  }

  classeEstoque(quantidade: number): string {

    if (quantidade === 0) {
      return 'vermelho';

    } else if (quantidade >= 1 && quantidade <= 5) {
      return 'amarelo';

    } else {
      return 'verde';
    }
  }
}
