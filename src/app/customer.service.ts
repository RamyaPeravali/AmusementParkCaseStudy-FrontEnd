import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customerdto } from './customerdto';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {


  constructor(private http:HttpClient) { }

  public viewAll():Observable<any>{
    console.log("Am inside service");
    return this.http.get("http://localhost:6081/all");
  } 

  public addCustomer(customer:Customerdto):Observable<any>{
    return this.http.post("http://localhost:6081/addcustomer",customer,{responseType:'text'});
  }

  public updateCustomer(customer:Customerdto):Observable<any>{
    return this.http.put("http://localhost:6071/updatecustomer",customer,{responseType:'text'});
  }

  public viewById(cid:number):Observable<any>
  {
    return this.http.get("http://localhost:6081/findById/"+cid);
  }

} 
