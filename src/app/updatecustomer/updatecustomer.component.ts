import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Customerdto } from '../customerdto';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  customer:Customerdto=new Customerdto();
  msg:String | undefined;
  errorMsg:String | undefined;
  

  constructor(private customerService:CustomerService) { }

  ngOnInit(): void {
  }
  updateCustomer(){
    this.customerService.updateCustomer(this.customer)
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
