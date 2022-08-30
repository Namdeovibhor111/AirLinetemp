import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightserviceService } from '../flightservice.service';
import {Iflight} from '../iflight'

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  constructor(    private flightService: FlightserviceService,
    private router: Router) { }

  ngOnInit(): void {
  }
  addFlight(value: Iflight) {
    console.log(value);
    this.flightService.addFlight(value).subscribe(
      () => {
        alert('Add flight successfully!!');
        this.router.navigate(['flightlist']);
      },
      (err) => {
        alert('Something went wrong!!!');
        console.log(err);
      }
    );
  }
}
