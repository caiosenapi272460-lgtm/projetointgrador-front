
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.scss'
})
export class CabecalhoComponent {
  @Input()
  topo = "lojaAngular2";
}