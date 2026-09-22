import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex11',
  imports: [CommonModule],
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
  somenteDisponiveis: boolean = false;

  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Mouse Gamer',
      preco: 150,
      quantidade: 0,
      promocao: true
    },
    {
      id: 2,
      nome: 'Teclado',
      preco: 150,
      quantidade: 3,
      promocao: false
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 800,
      quantidade: 8,
      promocao: true
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 200,
      quantidade: 5,
      promocao: false
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 300,
      quantidade: 10,
      promocao: true
    }
  ];

  alternarFiltro(): void {
    this.somenteDisponiveis = !this.somenteDisponiveis;
  }

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

  alternarPromocao(produto: Produto): void {
    produto.promocao = !produto.promocao;
  }
}
