import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import { Iadminlogin } from '../iadminlogin';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminlogindata: Iadminlogin = {
    adminusername: '',
    adminpass: '',
    aid: 0,
  };
  constructor(private flightservice: FlightserviceService, private router: Router) { // here we are injecting the service inside the constructor

  }
  saveLogin() {
    this.flightservice.login(this.adminlogindata).subscribe(() => {
      alert('LoggedIn Successfull!');
      this.router.navigate(['flightlist']);
    });
  }
  ngOnInit(): void {
  }

}
