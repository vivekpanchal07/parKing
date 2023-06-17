import { Component,OnInit  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PhoneSignInModalComponent } from '../phone-sign-in-modal/phone-sign-in-modal.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup;
  signupForm: FormGroup;
  showSignupForm: boolean = false;

  constructor(private formBuilder: FormBuilder,private dialog: MatDialog) {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.signupForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSignin() {
    console.log(this.signinForm.valid)
    if (this.signinForm.valid) {
      console.log('Sign In Form Data:', this.signinForm.value);
    }
  }

  onSignup() {
    if (this.signupForm.valid) {
      console.log('Sign Up Form Data:', this.signupForm.value);
    }
  }

  toggleSignupForm() {
    this.showSignupForm = !this.showSignupForm;
  }

  signInWithGoogle(){

  }
  openPhoneSignInModal() {
    const dialogRef = this.dialog.open(PhoneSignInModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
