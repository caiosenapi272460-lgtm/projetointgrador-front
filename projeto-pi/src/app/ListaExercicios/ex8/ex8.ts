import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-ex8',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './ex8.html',
  styleUrl: './ex8.scss'
})
export class Ex8 {

  produto = '';
  preco = 0;
  quantidade = 0;

}