import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {


  constructor(private http:HttpClient) { }

  public viewAll():Observable<any>{
    console.log("Am inside service");
    return this.http.get("http://localhost:6081/customer/all");
  } 
  public viewById():Observable<any>{
    console.log("Am inside service");
    return this.http.get("http://localhost:6081/customer/getcustomerbyid/2");
  } 

} 
