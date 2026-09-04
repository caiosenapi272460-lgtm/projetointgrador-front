import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5',
  imports: [],
  templateUrl: './ex5.html',
  styleUrl: './ex5.scss',
})
export class Ex5 {
  curtidas = 0;

  curtir(){
    this.curtidas++;
  }
}
