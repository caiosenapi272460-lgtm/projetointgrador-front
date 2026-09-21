import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex8',
  imports: [CurrencyPipe],
  templateUrl: './ex8.html',
  styleUrl: './ex8.scss',
})
export class Ex8 {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Teclado',
      preco: 150,
      quantidade: 5
    },
    {
      id: 2,
      nome: 'Mouse',
      preco: 80,
      quantidade: 10
    },
    {
      id: 3,
      nome: 'Monitor',
      preco: 1200,
      quantidade: 3
    },
    {
      id: 4,
      nome: 'Headset',
      preco: 250,
      quantidade: 4
    },
    {
      id: 5,
      nome: 'Webcam',
      preco: 300,
      quantidade: 2
    }
  ];
}
