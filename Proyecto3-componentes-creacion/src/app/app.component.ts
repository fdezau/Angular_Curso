import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from "./dado/dado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Proyecto3-componentes-creacion';
}
