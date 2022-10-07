import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';




const appRoutes:Routes=[

  {path:'', component:AppComponent},
  {path:'login', component:LoginComponent},
  {path:'home/:nombre/:rol', component:HomeComponentComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,LoginComponent,HomeComponentComponent]
})
export class AppModule { }
