import { Injectable } from '@angular/core';
import { PlaceModel } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: PlaceModel[]   = [
    {
      id: '1',
      title: 'eiffel tower',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tour_eiffel_at_sunrise_from_the_trocadero.jpg/1200px-Tour_eiffel_at_sunrise_from_the_trocadero.jpg',
      comments: []
    },
    {
      id: '2',
      title: 'Liberty statue',
      // tslint:disable-next-line: max-line-length
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/1200px-Statue_of_Liberty_7.jpg',
      comments: ['Awesome place', 'Good experience']
    }
  ];


  constructor() { }

  getPlaces() {
    return [...this.places];
  }
  getPlace( id: string ) {
    return{
      ...this.places.find((place: PlaceModel) => {
        return place.id === id;
      })
    };
  }

  addPlaces( titleTemp: string, imageUrlTemp: string ) {
    this.places.push({
      title: titleTemp,
      imageUrl: imageUrlTemp,
      comments: [],
      id: this.places.length + 1 + '',
    });
  }

  deletePlace( id: string ) {
    this.places = this.places.filter(place => {
      return place.id !== id;
    });
  }
}
