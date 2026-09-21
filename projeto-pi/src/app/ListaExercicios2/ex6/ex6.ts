import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  imports: [],
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  listaInicial: string[] = [
    'Caio',
    'Arthur',
    'Eric',
    'Flavio',
    'Miguel'
  ];

  nomes: string[] = [...this.listaInicial];

  removerUltimo() {
    this.nomes.pop();
  }

  limparLista() {
    this.nomes = [];
  }

  restaurarLista() {
    this.nomes = [...this.listaInicial];
  }
}
