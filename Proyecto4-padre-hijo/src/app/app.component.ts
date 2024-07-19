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
  resultado: string = '';

  constructor(){
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();
    
  }
  generarAleatorio(): number {
    return Math.trunc(Math.random()*6) + 1;
  }

  tirar(){
    this.valor1 = this.generarAleatorio();
    this.valor1 = this.generarAleatorio();
    this.valor1 = this.generarAleatorio();

    if(this.valor1 == this.valor2 && this.valor1== this.valor3 && this.valor2 == this.valor3){
      this.resultado = 'Ganó';
    } else {
      this.resultado = 'Perdió'
    }
  }

}
