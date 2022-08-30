import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css']
})
export class DeleteflightComponent implements OnInit {

  constructor(private adminService: FlightserviceService,
    private router: Router) { 
    
  }

  ngOnInit(): void {
  }

}
