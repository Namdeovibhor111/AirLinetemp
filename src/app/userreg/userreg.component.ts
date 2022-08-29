import { Component, OnInit } from '@angular/core';
import { Iuser } from '../iuser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent implements OnInit {
 
  constructor(private flightservice:FlightserviceService, private activateroute:ActivatedRoute, private router:Router) { }
  customer:Iuser = {
    c_id:0,
    title:'',
    fname:'',
    lname:'',
    dob:'',
    email:'',
    mob_no:'',
    cust_pass:''
  };
  ngOnInit(): void {
  }
  onSubmit(myform:NgForm)
  {
    this.customer=myform.value;
    this.flightservice.RegisterUser(this.customer).subscribe(data=>{
      console.log(this.customer)
  alert("Registered Success")
  this.router.navigate(['/userlog'])
    }

      )

  }
}
