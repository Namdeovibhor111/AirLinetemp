import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AdminComponent } from './admin/admin.component';
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { GlobalClass } from './global-class';
import { ListflightComponent } from './listflight/listflight.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { SeatselectComponent } from './seatselect/seatselect.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregComponent } from './userreg/userreg.component';


const routes: Routes = [
  {path:'adminlogin',component:AdminComponent},
  {path:'flightlist',component:ListflightComponent},
  {path:'userlog',component:UserloginComponent},
  {path:'searchflight',component:SearchflightComponent},
  {path:'userreg',component:UserregComponent},
  {path:'addflight',component:AddflightComponent},
  {path:'seatselect',component:SeatselectComponent},
  {path:'payment',component:PaymentComponent},
  {path:'mybooking',component:BookinghistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
