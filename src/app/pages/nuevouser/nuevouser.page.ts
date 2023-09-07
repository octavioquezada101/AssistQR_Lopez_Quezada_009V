import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-nuevouser',
  templateUrl: './nuevouser.page.html',
  styleUrls: ['./nuevouser.page.scss'],
})
export class NuevouserPage implements OnInit {

    usuario={
      nombre:'',
      rut:'',
      email:'',
      password:''

    }

  constructor(private menuController: MenuController,
              private alertController: AlertController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }

  async Enviar(){
    const alert = await this.alertController.create({
      header: 'Gracias'+ ' '+this.usuario.nombre,
      message: 'Su registro se ha guardado exitosamente',
      buttons: ['OK']
      
    });

    
    await alert.present();
    this.usuario.nombre="";
    this.usuario.rut="";
    this.usuario.email="";
     this.usuario.password="";
    
  }

}
