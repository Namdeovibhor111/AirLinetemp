import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import { Iuser } from '../iuser';
import { Iuserlogin } from '../iuserlogin';
import { Router } from '@angular/router';
import { GlobalClass } from '../global-class';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
userlogindata: Iuserlogin ={email:'',custPass:''}
customer:any ={}


  constructor(private flightservice:FlightserviceService, private router:Router) { }
  saveLogin(login:Iuserlogin){
    this.userlogindata=login
    console.log(this.userlogindata)
    this.flightservice.userlogin(this.userlogindata).subscribe(data=>
{
     console.log(data)
    this.customer = data
    GlobalClass.cid=Number(this.customer.cId)
    GlobalClass.Cname=this.customer.fname
     console.log("customer id "+GlobalClass.cid)
     console.log("Fliight id "+GlobalClass.fid)
     console.log("Fliight naem "+GlobalClass.Cname)
      alert("Login Successful!")
      GlobalClass.Isuserlogin=true
      this.router.navigate(['/seatselect'])
    })
  }
  ngOnInit(): void {
  }

}
