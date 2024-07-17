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
  artículos = [];
  codigo = 0;
  descripcion = '';
  precio = 0;

  agregar(){
    if (this.codigo || this.descripcion || this.precio){
      alert('Todos los campos son obligatorios');
        return;
    }
  }
}
