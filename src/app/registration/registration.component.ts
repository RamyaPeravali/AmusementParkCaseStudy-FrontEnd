import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customerdto } from '../customerdto';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    msg:String | undefined;
    errorMsg:String | undefined;  
    customer:Customerdto=new Customerdto();
    
   constructor(private customerService:CustomerService,public storageservice:StorageService) { }
 
   ngOnInit(): void {
   }
   addCustomer(){
    this.customer.role="customer";
    this.customer.userId=0;
     this.customerService.addCustomer(this.customer)
     .subscribe
     (
       (data)=>
       {
       console.log("data",data);
       this.msg=data.message;
       this.errorMsg=undefined;
       },      
       (error)=>
       {
         this.errorMsg=error.error;
         console.log(error.error);
         this.msg=undefined
       }
      );
 
     }
 
 }
