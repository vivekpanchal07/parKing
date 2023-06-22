import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingSpot } from './../../models/parking-spot.model';
import { ParkingSpotService } from '../../services/parking-spot.service';

@Component({
  selector: 'app-parking-spot-details',
  templateUrl: './parking-spot-details.component.html',
  styleUrls: ['./parking-spot-details.component.css']
})
export class ParkingSpotDetailsComponent implements OnInit{

  parkingSpot: ParkingSpot | null | undefined;
  

  constructor(
    private route: ActivatedRoute,
    private parkingSpotService: ParkingSpotService
  ) {}

  ngOnInit(): void {
    const parkingSpotId = this.route.snapshot.params['id'];
    this.getParkingSpotDetails(parkingSpotId);

  }

  getParkingSpotDetails(parkingSpotId: string) {
    this.parkingSpotService.getParkingSpotById(parkingSpotId)
      .subscribe((parkingSpot) => {
        this.parkingSpot = parkingSpot;
        console.log(parkingSpot)
      });
}
}
