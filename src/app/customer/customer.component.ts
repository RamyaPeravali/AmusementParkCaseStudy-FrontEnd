import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers:Customer[]=[];
  a:Customer=new Customer();
  msg:string;
  errorMsg:string;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    console.log("Am inside view component");
    this.customerService.viewAll().subscribe(data=>this.customers=data);
    //this.customers.customerId=3;
    //this.customers.customerId=8;
    //this.customers.customer.customerId=4;
    console.log(JSON.stringify(this.customers));
    console.log(this.customers);
  }

} 













