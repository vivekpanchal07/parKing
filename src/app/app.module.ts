import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
