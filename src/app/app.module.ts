import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { LoginComponent } from './shared/components/login/login.component';
import { TopnavComponent } from './navbar/topnav/topnav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PhoneSignInModalComponent } from './shared/components/phone-sign-in-modal/phone-sign-in-modal.component';
import { BetaComponent } from './shared/components/beta/beta.component';
import { ParkingSpotListComponent } from './shared/components/parking-spot-list/parking-spot-list.component';
import { ParkingSpotDetailsComponent } from './shared/components/parking-spot-details/parking-spot-details.component';
import { ParkingSpotService } from './shared/services/parking-spot.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './shared/services/auth.service';
import { ParkingTicketComponent } from './shared/components/parking-ticket/parking-ticket.component';
// import { QRCodeModule } from 'angularx-qrcode';
import { QRCodeModule } from 'angular2-qrcode';
import { ToastrModule } from 'ngx-toastr';
import { SlotsLayoutComponent } from './shared/components/slots-layout/slots-layout.component';
import { AdminDashboardComponent } from './shared/components/dashboard/admin-dashboard/admin-dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LoginComponent,
    TopnavComponent,
    PhoneSignInModalComponent,
    BetaComponent,
    ParkingSpotListComponent,
    ParkingSpotDetailsComponent,
    ParkingTicketComponent,
    SlotsLayoutComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    QRCodeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
