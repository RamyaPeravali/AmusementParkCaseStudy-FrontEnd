import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TicketbookingService {


  constructor(private http:HttpClient) { }

  public viewAll():Observable<any>{
    console.log("Am inside ticketbooking service");
    return this.http.get("http://localhost:6081/ticketbooking/getalltickets");
  } 

} 
