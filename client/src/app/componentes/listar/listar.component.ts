import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  Instructor: any;
  constructor(
    private servicio: ServicioService
  ) { }

  ngOnInit(): void {
    this.servicio.ObtenerInst().subscribe(respuesta => {
      console.log(respuesta);
      this.Instructor = respuesta;
    })
  }

  borrarRegistro(id: any, iControl: any) {
    console.log(id)
    console.log(iControl)
    if (window.confirm("Desea borrar")) {
      this.servicio.BorrarInst(id).subscribe((respuesta) => {
        this.Instructor.splice(iControl, 1);
      });
    }

  }

}
