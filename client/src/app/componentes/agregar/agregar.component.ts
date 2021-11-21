import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicioService } from 'src/app/servicio/servicio.service';

import { Router } from '@angular/router';
import { ListarComponent } from '../listar/listar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  formularioS: FormGroup;

  constructor(public formulario: FormBuilder,
    private servicioService: ServicioService,
    private ruteador: Router) {


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

  enviarDatos(): any {
    console.log("me presionaste");
    console.log(this.formularioS.value);
    this.servicioService.AgregarIns(this.formularioS.value).subscribe(resultado=>{
      this.ruteador.navigateByUrl('/listar');
    });
    
  }

}
