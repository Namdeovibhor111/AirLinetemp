import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import { Iflight } from '../iflight';


@Component({
  selector: 'app-listflight',
  templateUrl: './listflight.component.html',
  styleUrls: ['./listflight.component.css']
})
export class ListflightComponent implements OnInit {
flightlist:Iflight[]=[]
  constructor(private flightservice:FlightserviceService) { // here we are injecting the service inside the constructor
  this.flightservice.getflightList().subscribe(data => {
    this.flightlist=data
    console.log(data)
  })
  }

  ngOnInit(): void {
  }

}
