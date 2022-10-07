import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  
  

  constructor(private router:Router,private crudService:CrudService) { }

  ngOnInit(): void {
    
  }

  validar(){
      this.crudService.validarIngreso(this.correo,this.contra).subscribe(usuarios=>{
      this.usuarios=usuarios;
      if(this.usuarios[0] != undefined){
        this.redirigir(this.usuarios[0].Nombre,this.usuarios[0].Rol);
      }else{
        window.alert('Las credenciales son incorrectas, intente nuevamente.');
      }
    });
  }

  redirigir(nombre:string,rol:string){
    this.router.navigate(['home',nombre,rol]);
  }
  
}
