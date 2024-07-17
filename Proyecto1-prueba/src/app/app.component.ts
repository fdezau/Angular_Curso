import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nombre = 'Francisco Deza';
  apellido = ''; 
  edad = 16;
  email = 'fdeza@gmail.com';
  sueldos = [2000, 3000, 5000];
  activo = true;
  contador = 1;

  esActivo(){
    return this.activo ? 'Trabajador Activo' : 'Trabajador Inactivo';
  }

  ultimos3Sueldos(){
    return this.sueldos.reduce((a, v) => (a += v, a), 0);    
  }

  incrementar(){
    ++this.contador;
  }

  decrementar(){
    --this.contador;
  }
}
