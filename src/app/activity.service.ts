import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from './activity';
//import { Ticketbooking } from './ticketbooking';
import { Ticketbookingdto } from './ticketbookingdto';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {


  constructor(private http:HttpClient) { }

  public viewAll():Observable<any>{
    console.log("Am inside service");
    return this.http.get("http://localhost:6081/getactivity");
  } 

  public addActivity(activity:Activity):Observable<any>{
    return this.http.post("http://localhost:6081/insertactivity",activity,{responseType:'text'});
  }

  UpdateActivity(modifyActivity: Activity) {
    return this.http.put("http://localhost:6081/updateactivity",modifyActivity,{responseType:'text'});
    
  }
 bookticket(ticketbooking:Ticketbookingdto):Observable<any>{
   console.log(JSON.stringify(ticketbooking))
    return this.http.post("http://localhost:6081/bookticket",ticketbooking,{responseType:'text'});
  }
} 