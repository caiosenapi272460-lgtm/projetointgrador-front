import { Component } from '@angular/core';

@Component({
  selector: 'app-ex14',
  imports: [],
  templateUrl: './ex14.html',
  styleUrl: './ex14.scss',
})
export class Ex14 {
  nomes: string[] = [
    'Caio',
    'Arthur',
    'Eric',
    'Miguel',
    'Flavio'
  ];

  removerUltimoNome(): void {
    this.nomes.pop();
  }

  limparLista(): void {
    this.nomes = [];
  }

  restaurarLista(): void {
    this.nomes = [
      'Caio',
      'Arthur',
      'Eric',
      'Miguel',
      'Flavio'
    ];
  }
}
