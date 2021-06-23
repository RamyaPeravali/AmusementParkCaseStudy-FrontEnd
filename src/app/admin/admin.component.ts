import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  customers:Customer[]=[];
  
  msg:string;
  errorMsg:string;
  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
    console.log("Am inside view component");
    this.customerService.viewAll().subscribe(data=>this.customers=data);
    console.log(this.customers);
  }
}
