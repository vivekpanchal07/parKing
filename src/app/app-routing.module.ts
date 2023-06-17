import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { BetaComponent } from './shared/components/beta/beta.component';
import { ParkingSpotListComponent } from './shared/components/parking-spot-list/parking-spot-list.component';

const routes: Routes = [
  {path: '',component:LoginComponent},
  {path: 'login',component:LoginComponent},
  {path: 'beta',component:BetaComponent},
  {path: 'parkingspot',component:ParkingSpotListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
