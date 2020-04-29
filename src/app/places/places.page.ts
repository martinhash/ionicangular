import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import { PlaceModel } from './place.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places: PlaceModel[];

  constructor(  private placesService: PlacesService,
                private router: Router ) { }

  ngOnInit() {
    this.places = this.placesService.getPlaces();
  }
  ionViewWillEnter() {
    this.places = this.placesService.getPlaces();
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

}
