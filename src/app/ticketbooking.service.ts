import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticketbooking } from './ticketbooking';
import { Ticketbookingdto } from './ticketbookingdto';

@Injectable({
  providedIn: 'root'
})
export class TicketbookingService {

  constructor(private http:HttpClient) { }
  public viewAll():Observable<any>{
    console.log("Am inside ticketbooking service");
    return this.http.get("http://localhost:6074/ticketbooking/getalltickets");
  } 
  public bookticket(ticketbooking:Ticketbooking):Observable<any>{
    console.log("Am inside ticketbooking service");
    return this.http.post("http://localhost:6074/ticketbooking/bookticket",ticketbooking,{responseType:'text'});
  } 
  public updateticket(ticketbooking:Ticketbooking):Observable<any>{
    console.log("Am inside ticketbooking service");
    return this.http.put("http://localhost:6074/ticketbooking/updateticket",ticketbooking,{responseType:'text'});
  } 
}
