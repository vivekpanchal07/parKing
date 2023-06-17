import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-phone-sign-in-modal',
  templateUrl: './phone-sign-in-modal.component.html',
  styleUrls: ['./phone-sign-in-modal.component.css']
})
export class PhoneSignInModalComponent {
  signinForm: FormGroup;
  constructor(private formBuilder: FormBuilder,public dialogRef: MatDialogRef<PhoneSignInModalComponent>) {
    this.signinForm = this.formBuilder.group({
      phoneNo: ['', Validators.required]
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
