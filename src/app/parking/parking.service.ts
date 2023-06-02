import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ParkingArea } from '../shared/models/parking-area.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(
    private http: HttpClient
  ) { }

  getParkingAreas(): Observable<ParkingArea[]> {
    return this.http.get<ParkingArea[]>('/api/parking-areas'); // Replace with your API endpoint or data source
  }
}
