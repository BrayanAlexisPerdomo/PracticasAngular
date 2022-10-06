import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Personas } from './../interface/personas.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  obtenerPersonas(){
    return this.http.get<Personas[]>('http://localhost/crud/consultar.php');
  }

  eliminarPersonas(id:number){
    return this.http.get('http://localhost/crud/eliminar.php?id='+id);
  }

  guardarPersonas(nombre:string, direccion:string, edad:string, estado:boolean){
    return this.http.get('http://localhost/crud/guardar.php?nombre='+nombre+'&direccion='+direccion+'&edad='+edad+'&estado='+estado);
  }

  editarPersonas(nombre:string, direccion:string, edad:string, estado:boolean,id:number){
    return this.http.get('http://localhost/crud/editar.php?nombre='+nombre+'&direccion='+direccion+'&edad='+edad+'&estado='+estado+'&id='+id);
  }
}
