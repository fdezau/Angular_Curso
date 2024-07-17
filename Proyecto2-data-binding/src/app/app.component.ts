import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import Articulo from './models/articulo.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
[x: string]: any;
  articulos: Array<Articulo> = [];
  codigo = 0;
  descripcion = '';
  precio = 0;

  agregar(){
    if (!this.codigo || !this.descripcion.length || !this.precio){
      alert('Todos los campos son obligatorios');
        return;
    }

    let articulo: Articulo = new Articulo(this.codigo, this.descripcion, this.precio);
    this.articulos.push(articulo);

    alert('El artículo se agregó de forma correcta')
  }
}
