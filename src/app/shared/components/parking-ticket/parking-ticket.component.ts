import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-parking-ticket',
  templateUrl: './parking-ticket.component.html',
  styleUrls: ['./parking-ticket.component.css'],
})
export class ParkingTicketComponent implements OnInit {
  public myAngularxQrCode!: string;

  constructor(private toastr: ToastrService) {
    this.myAngularxQrCode = 'ItSoluionStuff.com';
  }

  parkingDetails = {
    "ticketNumber" : '001',
    "vehicleNumber": 'GJ 01 NX 7835',
    "parkingSpot": '4',
    "startTime": '3:00 PM',
    "endTime" : '4:00 PM'
  };

  ngOnInit() {
    // this.toastr.success('Success', 'Data Submitted Successfully',{timeOut:3000,progressBar:true});
  }
}
