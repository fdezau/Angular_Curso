import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto4-padre-hijo';
  valor1: number;
  valor2: number;
  valor3: number;

  constructor(){
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
    
  }
  generarAleatorio(): number {
    return Math.trunc(Math.random()*6) + 1;
  }
}
