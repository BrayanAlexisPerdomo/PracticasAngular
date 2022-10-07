import { Component, OnInit } from '@angular/core';

import { CrudService } from '../service/crud.service';

import { Personas } from '../interface/personas.interface'
import { ActivatedRoute, Router } from '@angular/router';

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
  rol:string="";
  name:string="";

  constructor(private router:Router,private route:ActivatedRoute,private crudService:CrudService){}

  ngOnInit(){
    this.rol=this.route.snapshot.params['rol'];
    this.name=this.route.snapshot.params['nombre'];
    this.consultar();
  }

  consultar(){
    this.crudService.obtenerPersonas().subscribe(personas=>{
      this.personas=personas;
    });
  }

  eliminar(id:number){
    this.crudService.eliminarPersonas(id).subscribe(data=>{
      this.ngOnInit();
    });
  }

  guardar(){
    this.crudService.guardarPersonas(this.nombre, this.direccion, this.edad, this.estado).subscribe(data=>{
      this.ngOnInit()
    });
  
  }

  editar(id:number){
    this.crudService.editarPersonas(this.nombre, this.direccion, this.edad, this.estado,id).subscribe(data=>{
      this.ngOnInit();
    });
  }

  salir(){
    this.router.navigate(['login']);
  }
}
