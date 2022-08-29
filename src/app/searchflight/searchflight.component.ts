import { Component, OnInit } from '@angular/core';
import { Iflight } from '../iflight';
import { Iflightsearch } from '../iflightsearch';
import { FlightserviceService } from '../flightservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
 searchdata:Iflightsearch = {source:'',destination:''}
 flightlist:any[]=[]
  constructor(private flightservice:FlightserviceService, private router:Router) { }
searchFlight(flight:Iflightsearch){
 this.searchdata=flight
 this.flightservice.searchflight(this.searchdata).subscribe((data)=>{
  alert("Flight Fetched")
  this.flightlist=data
  console.log(data)
  
 })
}
  ngOnInit(): void {
 
    
  }

}
