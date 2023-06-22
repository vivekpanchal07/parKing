import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { BetaComponent } from './shared/components/beta/beta.component';
import { ParkingSpotListComponent } from './shared/components/parking-spot-list/parking-spot-list.component';
import { ParkingSpotDetailsComponent } from './shared/components/parking-spot-details/parking-spot-details.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'login',component:LoginComponent},
  {path: 'beta',component:BetaComponent},
  {path: 'parkingspots',component:ParkingSpotListComponent},
  // { path: 'parking-spot-details', component: ParkingSpotDetailsComponent },  
  { path: 'parking-spot-details/:id', component: ParkingSpotDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
