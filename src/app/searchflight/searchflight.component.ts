import { Component, OnInit } from '@angular/core';
import { Iflight } from '../iflight';
import { Iflightsearch } from '../iflightsearch';
import { FlightserviceService } from '../flightservice.service';
import { Data, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { GlobalClass } from '../global-class';
import { Ifindid } from '../ifindid';


@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {
  textBoxDisabled = false;

  toggle(){
    this.textBoxDisabled = !this.textBoxDisabled;
  }

 searchdata:Iflightsearch = {source:'',destination:''}
flid:Ifindid ={fid:0}
selectedflight?:any
 flightlist:any[]=[]
 public id:Number = 0
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
  onSelect(flight:Iflight):void{
this.selectedflight = flight
GlobalClass.fId = Number(this.selectedflight.fId)
GlobalClass.fname = this.selectedflight.fname
GlobalClass.source = this.selectedflight.source
GlobalClass.destination = this.selectedflight.destination
GlobalClass.fare = Number(this.selectedflight.fare)
console.log(GlobalClass.fId)
console.log(GlobalClass.fname)
console.log(GlobalClass.source)
console.log(GlobalClass.destination)
console.log(GlobalClass.fare)

console.log(this.selectedflight)
this.router.navigate(['/userlog'])
  }
  // searchFlightId(flid:Ifindid)
  // {
      
  //  console.log( GlobalClass.fId)
  // this.router.navigate(['/userlog'])
  // }

}
