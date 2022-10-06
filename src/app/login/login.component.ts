import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../interface/usuarios';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuarios:Usuarios[]=[];

  correo:string="";
  contra:string="";
  i:number=0;


  constructor(private crudService:CrudService) { }

  ngOnInit(): void {
  }

  validar(){
    console.log(this.correo);
    console.log(this.contra);
   
    this.crudService.validarIngreso(this.correo,this.contra).subscribe(usuarios=>{
      console.log(usuarios[0].Nombre);
      this.usuarios=usuarios;
    });
  }
  
}
