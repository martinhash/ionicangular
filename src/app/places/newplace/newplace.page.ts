import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newplace',
  templateUrl: './newplace.page.html',
  styleUrls: ['./newplace.page.scss'],
})
export class NewplacePage implements OnInit {

  constructor(  private placeService: PlacesService,
                private router: Router ) { }

  ngOnInit() {
  }

  saveNewPlace(title, url) {
    this.placeService.addPlaces(title.value, url.value);
    this.router.navigate(['places']);
  }
}
