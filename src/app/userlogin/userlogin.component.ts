import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';
import { Iuser } from '../iuser';
import { Iuserlogin } from '../iuserlogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
userlogindata: Iuserlogin ={email:'',custPass:''}

  constructor(private flightservice:FlightserviceService, private router:Router) { }
  saveLogin(login:Iuserlogin){
    this.userlogindata=login
    console.log(this.userlogindata)
    this.flightservice.userlogin(this.userlogindata).subscribe((data)=>
{
    console.log(data)
      alert("Login Successful!")
      this.router.navigate(['/searchflight'])
    })
  }
  ngOnInit(): void {
  }

}
