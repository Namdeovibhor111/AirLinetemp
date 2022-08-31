import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalClass } from '../global-class';
import { FlightserviceService } from '../flightservice.service';
import { Ibookingdetails } from '../ibookingdetails';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  cvc!: any;
  cardnumber!: any;
  name!: any;
  submitForm!: any;
  bookingdata:Ibookingdetails= {
    bId:GlobalClass.bid,
    cId: GlobalClass.cid,
    fId: GlobalClass.fId,
    bookingDate: '2022-08-31',
    flightDate: '2022-09-04',
    passenger:3,
    totalFare: 9200,
    bookingStatus: 'Confirmed'
  }
  constructor(private flightservice:FlightserviceService,private router:Router) { }

  ngOnInit(): void {

  }

  Onbook(){
      this.flightservice.booking(this.bookingdata).subscribe(data=>{
        console.log(data)
        alert("Booking Confirmed")
        this.router.navigate(['/mybooking'])
      })
  }

}
