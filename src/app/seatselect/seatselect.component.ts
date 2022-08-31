import { Component, OnInit } from '@angular/core';
import { GlobalClass } from '../global-class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seatselect',
  templateUrl: './seatselect.component.html',
  styleUrls: ['./seatselect.component.css']
})
export class SeatselectComponent implements OnInit {
 Cust_name :string = GlobalClass.Cname
 Fid :Number = GlobalClass.fId
 Cid :Number = GlobalClass.cid

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigate()
  {
      
  this.router.navigate(['/payment'])
  }
}
