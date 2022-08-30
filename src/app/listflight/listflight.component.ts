import { NullVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightserviceService } from '../flightservice.service';
import { Iflight } from '../iflight';


@Component({
  selector: 'app-listflight',
  templateUrl: './listflight.component.html',
  styleUrls: ['./listflight.component.css']
})
export class ListflightComponent implements OnInit {
flightlist:Iflight[]=[]
  constructor(private flightservice:FlightserviceService,private router:Router) { // here we are injecting the service inside the constructor
  this.flightservice.getflightList().subscribe(data => {
    this.flightlist=data
    console.log(data)
  })
  }

  ngOnInit(): void {
  }
  delete(id: number, name: string) {
    
    if (confirm(`Are you sure to delete ${name}?`)) {
      this.flightservice.deleteflight(id).subscribe(
        ( ) => {
          alert('Delete flight successfully!!');
          this.router.navigate(['flightlist']);
        },
        (err) => {
          alert('Something went wrong!!!');
          console.log(err);
        }
      );
    }
  }

}
