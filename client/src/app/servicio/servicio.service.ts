import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { instructor } from './Instructor';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  URL: String = "http://localhost/proyecto/server/public/";
  // 'rol'
  // 'nombre'
  // 'apellido_paterno'
  // 'apellido_materno'
  // 'edad'
  // 'telefono'
  // 'correo'
  // 'usuario'
  // 'password'
  constructor(private clienteHttp: HttpClient) { }

  AgregarIns(datosIns: instructor): Observable<any> {
    let headers = new HttpHeaders
    headers.append('Authorization', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJvTVlmWTQyOUlUQ2sxQm1uUzVmK0I4YU5sckx5aUk5bkVwMDFRcUdlNm1FPSIsImlhdCI6MTYzNzQ1NjI3OCwiZXhwIjoxNjM3NDc3ODc4LCJkYXRhIjp7ImlkIjozLCJyb2wiOiJJIiwibm9tYnJlIjoiTWlsYWdyb3MiLCJhcGVsbGlkb19wYXRlcm5vIjoiUFx1MDBlOXJleiIsImFwZWxsaWRvX21hdGVybm8iOiJUYXBpYSIsImVkYWQiOjQyLCJ0ZWxlZm9ubyI6IjQ1MjIxMTc3ODgiLCJjb3JyZW8iOiJkYXZpc0Bob3RtYWlsLmNvbSIsInVzdWFyaW8iOiJpbnMxIn19.WdsF-QffHLTfo7g7U7Z0DfBkaDnw0gQKtD_MgIC3mbA")
    return this.clienteHttp.post(this.URL + "instructores", datosIns, { headers: headers });
  }

  ObtenerInst() {
    return this.clienteHttp.get(this.URL + "instructores");
  }

  BorrarInst(id: any): Observable<any> {
    return this.clienteHttp.delete(this.URL + "instructores/" + id);
  }

  BuscarInst(id: any): Observable<any> {
    return this.clienteHttp.get(this.URL + "instructores/", id);
  }
  EditarInst(id: any, datosIns: instructor): Observable<any> {
    return this.clienteHttp.put(this.URL + "instructores/" + id, datosIns);
  }

  IniciarInst(user: any, pass: any) {
    return this.clienteHttp.get(this.URL + "login/" + user + "/" + pass);
  }



}
