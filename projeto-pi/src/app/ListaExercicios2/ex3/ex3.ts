import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3',
  imports: [],
  templateUrl: './ex3.html',
  styleUrl: './ex3.scss',
})
export class Ex3 {
  idade: number = 0;

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }

}

