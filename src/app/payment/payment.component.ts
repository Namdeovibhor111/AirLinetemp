import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
