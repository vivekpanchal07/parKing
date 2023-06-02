import { Component, OnInit } from '@angular/core';
import { MapService } from '../shared/services/map.service';
import { ParkingArea } from '../shared/models/parking-area.model';
import { ParkingService } from '../parking/parking.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(
    private mapService: MapService,
    private parkingService: ParkingService
  ){}

  ngOnInit() {
    this.mapService.initMap('map'); // Initialize the map using the map service

    // this.parkingService.getParkingAreas().subscribe((parkingAreas: ParkingArea[]) => {
    //   this.plotParkingMarkers(parkingAreas); // Plot the parking area markers on the map
    // });
  }

  plotParkingMarkers(parkingAreas: ParkingArea[]) {
    for (const area of parkingAreas) {
      this.mapService.addMarker(area.latitude, area.longitude, area.name); // Add a marker for each parking area
    }
  }
}
