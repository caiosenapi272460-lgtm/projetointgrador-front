import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex12',
  imports: [CommonModule, FormsModule],
  templateUrl: './ex12.html',
  styleUrl: './ex12.scss',
})
export class Ex12 {
  nomeProduto: string = '';

  quantidadeProduto: number | null = null;

  mensagemErro: string = '';

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
    }
  ];

  cadastrarProduto(): void {

    this.mensagemErro = '';

    if (this.nomeProduto.trim() === '') {
      this.mensagemErro = 'Preencha o nome do produto.';
      return;
    }

    if (
      this.quantidadeProduto === null ||
      this.quantidadeProduto < 0
    ) {
      this.mensagemErro = 'A quantidade deve ser igual ou maior que zero.';
      return;
    }

    const novoProduto: Produto = {
      id: this.gerarNovoId(),
      nome: this.nomeProduto.trim(),
      preco: 0,
      quantidade: this.quantidadeProduto,
      promocao: false
    };

    this.produtos.push(novoProduto);

    this.nomeProduto = '';

    this.quantidadeProduto = null;

    this.mensagemErro = '';
  }

  excluirProduto(id: number): void {

    const indice = this.produtos.findIndex(
      produto => produto.id === id
    );

    if (indice !== -1) {
      this.produtos.splice(indice, 1);
    }
  }

  gerarNovoId(): number {

    if (this.produtos.length === 0) {
      return 1;
    }

    return Math.max(
      ...this.produtos.map(produto => produto.id)
    ) + 1;
  }
}
