import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  imports: [],
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  curtidas = 0

  aumentar(){
    this.curtidas++;
  }
  diminuir(){
    this.curtidas--;
    if(this.curtidas > 0){
      this.curtidas--;
    }
  }
}
