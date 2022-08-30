import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { ListflightComponent } from './listflight/listflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { FormsModule } from '@angular/forms';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregComponent } from './userreg/userreg.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { AddflightComponent } from './addflight/addflight.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ListflightComponent,
    SearchflightComponent,
    UserloginComponent,
    UserregComponent,
    DeleteflightComponent,
    AddflightComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
