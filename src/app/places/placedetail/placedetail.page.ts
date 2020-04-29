import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { PlaceModel } from '../place.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-placedetail',
  templateUrl: './placedetail.page.html',
  styleUrls: ['./placedetail.page.scss'],
})
export class PlacedetailPage implements OnInit {



  place: PlaceModel;

  constructor(  private activatedRoute: ActivatedRoute,
                private router: Router,
                private placeService: PlacesService,
                public alertController: AlertController ) { }

  ngOnInit() {
   this.activatedRoute.paramMap.subscribe( param => {
    const recipeId = param.get('placeId');
    const placeTemp = this.placeService.getPlace(recipeId);
    this.place = placeTemp;
  });
  }


  async deletePlace() {
    const deleteAlert = await this.alertController.create({
      header: 'Eliminar lugar',
      message:  'Estás seguro que deseas eliminar' + this.place.title + '?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Eliminar',
          handler: () => {
              this.placeService.deletePlace(this.place.id);
              this.router.navigate(['places']);
          }
        }
      ]
    });
    await deleteAlert.present();
  }
}
