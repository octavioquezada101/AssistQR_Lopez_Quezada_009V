import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Componente{
  name: string;
  redirecTo: string;
  icon:string;
  
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {componentes: Componente[]=[
  {
    name:'inicio',
    redirecTo:'/home',
    icon:'home-outline' 
   
  },
  {
    name:'Ingreso APP',
    redirecTo:'/ingresoapp',
    icon:'enter-outline'
  },
  {
    name:'Nuevo usuario',
    redirecTo:'/nuevouser',
    icon:'person-add-outline'
  },
  {
    name:'Olvido su clave',
    redirecTo:'/olvido',
    icon:'key-outline'
  },
  {
    name:'Acerca de...',
    redirecTo:'/sobre',
    icon:'help-circle-outline'
  },
  {
    name:'Vivo Duoc',
    redirecTo:'/vivoduoc',
    icon:'school-outline'
  },
]








  
constructor(private router: Router) {}
}
