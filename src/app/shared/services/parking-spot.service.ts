import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ParkingSpot } from '../models/parking-spot.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotService {

  private parkingSpots: ParkingSpot[] = [
    {
      name: 'Spot 1',
      id: '001',
      address: '123 Street',
      facilities: ['fa-car', 'fa-wifi', 'fa-charging-station'],
      totalSlots: 50,
      availableSlots: 25,
      fare: 10
    },
    {
      name: 'Spot 2',
      id: '002',
      address: '456 Road',
      facilities: ['fa-car', 'fa-wifi'],
      totalSlots: 30,
      availableSlots: 10,
      fare: 8
    },
    {
      name: 'Spot 3',
      id: '003',
      address: '789 Avenue',
      facilities: ['fa-car', 'fa-charging-station'],
      totalSlots: 40,
      availableSlots: 20,
      fare: 12
    },
    {
      name: 'Spot 4',
      id: '004',
      address: '789 Avenue',
      facilities: ['fa-car', 'fa-charging-station'],
      totalSlots: 40,
      availableSlots: 20,
      fare: 12
    },
    {
      name: 'Spot 5',
      id: '005',
      address: '789 Avenue',
      facilities: ['fa-car', 'fa-charging-station'],
      totalSlots: 40,
      availableSlots: 20,
      fare: 12
    },

  ];

  constructor() { }

  getParkingSpotById(id: string): Observable<ParkingSpot| null | undefined> {
    const parkingSpot = this.parkingSpots.find(spot => spot.id === id);
    return of(parkingSpot);
  }

  getAllParkingSpots(): Observable<ParkingSpot[]> {
    return of(this.parkingSpots);
  }
}
