import { Injectable } from '@angular/core';
import * as L from 'leaflet';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map: any;
  constructor() { }
  
  initMap(map: string) {
    this.map = L.map(map).setView([51.505, -0.09], 7); // Initialize the map with a default view
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © OpenStreetMap contributors',
      maxZoom: 18
    }).addTo(this.map);
  }

    addMarker(latitude: number, longitude: number, name: string) {
      L.marker([latitude, longitude]).addTo(this.map).bindPopup(name);
    }
}
