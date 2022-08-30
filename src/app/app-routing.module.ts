import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddflightComponent } from './addflight/addflight.component';
import { AdminComponent } from './admin/admin.component';
import { ListflightComponent } from './listflight/listflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregComponent } from './userreg/userreg.component';


const routes: Routes = [
  {path:'adminlogin',component:AdminComponent},
  {path:'flightlist',component:ListflightComponent},
  {path:'userlog',component:UserloginComponent},
  {path:'searchflight',component:SearchflightComponent},
  {path:'userreg',component:UserregComponent},
  {path:'addflight',component:AddflightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
