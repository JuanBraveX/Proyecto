import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicioService } from 'src/app/servicio/servicio.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formularioS: FormGroup;

  id = "";
  pass = "";

  constructor(public formulario: FormBuilder,
    private servicioService: ServicioService,
    private ruteador: Router) {
    this.formularioS = this.formulario.group({
      id: [''],
      pass: ['']
    })
  }

  ngOnInit(): void {
  }

  IniciarInst(): any {
    console.log("me presionaste");
    console.log(this.id,this.pass);
    this.servicioService.IniciarInst(this.id,this.pass).subscribe(resultado => {
      this.ruteador.navigateByUrl('/listar');
    });
  }
}
