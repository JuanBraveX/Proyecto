import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicioService } from 'src/app/servicio/servicio.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  ELID: any;
  formularioS: FormGroup;
  constructor(
    private activate: ActivatedRoute,
    private servicio: ServicioService,
    public formulario: FormBuilder,
    private ruteador: Router
  ) {
    this.ELID = this.activate.snapshot.paramMap.get('id');
    console.log('id')
    this.servicio.BuscarInst(this.ELID).subscribe(respuesta => {
      console.log(respuesta);
      this.formularioS.setValue({
        rol: respuesta[0]['rol'],
        nombre: respuesta[0]['nombre'],
        apellido_paterno: respuesta[0]['apellido_paterno'],
        apellido_materno: respuesta[0]['apellido_materno'],
        edad: respuesta[0]['edad'],
        telefono: respuesta[0]['telefono'],
        correo: respuesta[0]['correo'],
        usuario: respuesta[0]['usuario'],
        password: respuesta[0]['password']
      })
    });
    this.formularioS = this.formulario.group({
      rol: [''],
      nombre: [''],
      apellido_paterno: [''],
      apellido_materno: [''],
      edad: [''],
      telefono: [''],
      correo: [''],
      usuario: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

enviarDatos():any{
  console.log(this.ELID)
  console.log(this.formularioS.value);
  this.servicio.EditarInst(this.ELID,this.formularioS.value).subscribe(()=>{
    this.ruteador.navigateByUrl('/listar')
  });
}

}
