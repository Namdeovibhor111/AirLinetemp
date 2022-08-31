import { Component, OnInit } from '@angular/core';
import { GlobalClass } from '../global-class';
import { FlightserviceService } from '../flightservice.service';
import { Ibookingdetails } from '../ibookingdetails';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
public Name:Number =GlobalClass.cid
selectedbookingdata?:any

//change if error comes
  mybooking:Ibookingdetails[]=[]
  constructor(private flightservice:FlightserviceService, private activaterouter: ActivatedRoute, private route:Router) { 
   this.flightservice.mybooking().subscribe(data=>{
    this.mybooking=data
    console.log(GlobalClass.cid)
   })
  }
Cancel(bookdata:Ibookingdetails):void{
   this.selectedbookingdata = bookdata
   this.selectedbookingdata.bookingStatus = "Cancelled"

   GlobalClass.cancelid = this.selectedbookingdata.bId
   console.log(this.selectedbookingdata)
   this.flightservice.cancelbooking().subscribe(()=>{
    alert("Seat Cancelled")
   })
   
}
  ngOnInit(): void {
    
      
  }

}
