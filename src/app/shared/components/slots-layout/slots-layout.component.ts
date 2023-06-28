import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-slots-layout',
  templateUrl: './slots-layout.component.html',
  styleUrls: ['./slots-layout.component.css']
})
export class SlotsLayoutComponent implements OnInit {
  availableSlots: number[] = [1, 2, 3, 4, 5]; // Example array of available slot numbers
  selectedSlot!: number;
  totalSlots: number = 10;
  bookedSlots: number[] = [3, 5];

  constructor(private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
  }

  selectSlot(slot: number) {
    this.selectedSlot = slot;
  }

  isSlotBooked(slot: number): boolean {
    return this.bookedSlots.includes(slot);
  }

  confirmBooking(selectedSlot: number):void{
    this.toastr.success('Success', 'Slot No: '+selectedSlot+' is booked ',{timeOut:3000,progressBar:true});
    this.router.navigate(['/parkingticket']);
  }

}
