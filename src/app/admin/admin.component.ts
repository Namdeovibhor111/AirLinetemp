import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { // here we are injecting the service inside the constructor

  }

  ngOnInit(): void {
  }

}
