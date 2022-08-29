import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ListflightComponent } from './listflight/listflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregComponent } from './userreg/userreg.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent},
  {path:'flightlist',component:ListflightComponent},
  {path:'userlog',component:UserloginComponent},
  {path:'searchflight',component:SearchflightComponent},
  {path:'userreg',component:UserregComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
