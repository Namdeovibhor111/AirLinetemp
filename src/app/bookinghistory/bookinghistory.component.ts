import { Component, OnInit } from '@angular/core';
import { GlobalClass } from '../global-class';
import { FlightserviceService } from '../flightservice.service';
import { Ibookingdetails } from '../ibookingdetails';


@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
public Name:Number =GlobalClass.cid
  mybooking:Ibookingdetails[]=[]
  constructor(private flightservice:FlightserviceService) { 
   this.flightservice.mybooking().subscribe(data=>{
    this.mybooking=data
    console.log(GlobalClass.cid)
   })
  }

  ngOnInit(): void {

  }

}
