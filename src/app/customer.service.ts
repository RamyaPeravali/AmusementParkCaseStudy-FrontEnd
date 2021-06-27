import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Customerdto } from './customerdto';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  
  public addCustomer(customer:Customerdto):Observable<any>{
    return this.http.post("http://localhost:6074/customer/addcustomer",customer,{responseType:'text'});
  }

 
  public updateCustomer(customer:Customerdto):Observable<any>{
    return this.http.put("http://localhost:6074/customer/updatecustomer",customer,{responseType:'text'});
  }



  constructor(private http:HttpClient) { }

  public viewAll():Observable<any>{
    console.log("Am inside service");
    return this.http.get("http://localhost:6074/customer/all");
  } 


} 
