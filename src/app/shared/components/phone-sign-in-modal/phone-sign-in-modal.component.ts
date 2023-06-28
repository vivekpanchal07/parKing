import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-phone-sign-in-modal',
  templateUrl: './phone-sign-in-modal.component.html',
  styleUrls: ['./phone-sign-in-modal.component.css']
})
export class PhoneSignInModalComponent implements OnInit {
  signinOtpForm: FormGroup;
  showOTP = false;
  constructor(private formBuilder: FormBuilder,
              public dialogRef: MatDialogRef<PhoneSignInModalComponent>,
              private toastr: ToastrService) {
    this.signinOtpForm = this.formBuilder.group({
      phoneNo: ['', Validators.required],
      phoneOtp: ['', Validators.required]
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {}

  sendOTP(): void{
    this.showOTP = true;
  }
  validateOTP(): void {
    this.toastr.success('Success', 'Login Succesfull',{timeOut:3000,progressBar:true});

  }

}
