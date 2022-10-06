import { Component, OnInit } from '@angular/core';

import { CrudService } from '../service/crud.service';

import { Personas } from '../interface/personas.interface'

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'crud2';

  personas:Personas[]=[];

  nombre:string="";
  direccion:string="";
  edad:string="";
  estado:boolean=true;

  constructor(private crudService:CrudService){}

  ngOnInit(){
    this.consultar();
  }

  consultar(){
    this.crudService.obtenerPersonas().subscribe(personas=>{
      console.log(personas);
      this.personas=personas;
    });
  }

  eliminar(id:number){
    this.crudService.eliminarPersonas(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    });
  }

  guardar(){
    this.crudService.guardarPersonas(this.nombre, this.direccion, this.edad, this.estado).subscribe(data=>{
      console.log(data);
      this.ngOnInit()
    });
  
  }

  editar(id:number){
    this.crudService.editarPersonas(this.nombre, this.direccion, this.edad, this.estado,id).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    });
  }
}
