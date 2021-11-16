import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos ';
  listaVideos: IFilme[] = [
    {
      nome:' Pranto Maldito (2021)',
      lancamento:'29/07/2021',
      duracao:'150 minutos',
      classificacao: 29,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/50SJI2Cbs4m9vhtrd9TVFEIX9n4.jpg',
      genero: ['terror','muito terro']
    },
    {
      nome:'Sem Conexão: Parte 2 (2021) ',
      lancamento:'27/10/2021',
      duracao:'1h 36m ',
      classificacao: 59,
      cartaz:'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/txp0Wm5MGTYRJopAC015VRanBab.jpg',
      genero: ['Terror', 'Thriller', 'Comédia']

    }


  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja realmente Favoritar o Filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok, Favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme Adicionado as favoritos',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }



}
