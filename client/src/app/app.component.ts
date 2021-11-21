import { Component } from '@angular/core';
import { ServicioService } from './servicio/servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServicioService]

})
export class AppComponent {
  title = 'client';
}
