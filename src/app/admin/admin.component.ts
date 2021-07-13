import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  customers:Customer[]=[];
  
  msg:string;
  errorMsg:string;
  constructor(private customerService:CustomerService,public storageservice:StorageService,public router:Router) { }

  ngOnInit(): void {
   if(this.storageservice.loginflag==false || this.storageservice.role !='admin')
    this.router.navigateByUrl("/login");
  else{

 
    console.log("Am inside view component");
    this.customerService.viewAll().subscribe(data=>this.customers=data);
    console.log(this.customers);
  }
}
  

  

}
