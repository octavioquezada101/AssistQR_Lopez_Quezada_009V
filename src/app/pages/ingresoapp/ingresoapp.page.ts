import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-ingresoapp',
  templateUrl: './ingresoapp.page.html',
  styleUrls: ['./ingresoapp.page.scss'],
})
export class IngresoappPage implements OnInit {

  usuario={
    email:'',
    password:''

  }

  constructor(private menuController: MenuController,
    private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  


  async Enviar(){
    const alert = await this.alertController.create({
      header: 'Gracias',
      message: 'Estamos revisando nuestros registros',
      buttons: ['OK']      
    });    
    await alert.present();
     this.usuario.email="";    
  }

  async nuevo() {
    this.router.navigate(['/nuevouser']); 
  }

  async olvidacion() {
    this.router.navigate(['/olvido']); 
  }

}


/*@Component({
  selector: 'app-ingresoapp',
  templateUrl: './ingresoapp.page.html',
  styleUrls: ['./ingresoapp.page.scss'],
})
export class ExampleComponent {
  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      cssClass: 'custom-loading',
    });

    loading.present();

}*/