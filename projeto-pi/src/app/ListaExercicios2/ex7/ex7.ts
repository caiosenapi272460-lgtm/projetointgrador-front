import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-ex7',
  imports: [NgClass],
  templateUrl: './ex7.html',
  styleUrl: './ex7.scss',
})
export class Ex7 {
  disciplinas: string[] = [
    'Banco de Dados',
    'Redes de Computadores',
    'Java',
    'Python',
    'Angular',
    'Engenharia de Software'
  ];
}
