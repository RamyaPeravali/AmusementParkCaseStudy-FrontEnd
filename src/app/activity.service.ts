import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {


  constructor(private http:HttpClient) { }

  public viewAll():Observable<any>{
    console.log("Am inside service");
    return this.http.get("http://localhost:6081/activity/getactivity");
  } 

} 