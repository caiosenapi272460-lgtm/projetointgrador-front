import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex10',
  imports: [FormsModule],
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss'
})
export class Ex10 {

  usuario = '';
  senha = '';
  mensagem = '';

  entrar() {
    this.mensagem = `Bem-vindo, ${this.usuario}!`;
  }

}