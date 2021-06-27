import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Customerdto } from '../customerdto';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
   msg:String | undefined;
  errorMsg:String | undefined;
  
    
    customer:Customerdto=new Customerdto();

  

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  addCustomer(){
    this.customerService.addCustomer(this.customer)
    .subscribe
    (
      (data)=>
      {
      console.log("data",data);
      this.msg=data;
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
