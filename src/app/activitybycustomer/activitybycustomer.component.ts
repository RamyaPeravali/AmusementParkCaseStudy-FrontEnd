import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { Logindto } from '../logindto';
import { StorageService } from '../storage.service';
import { Ticketbookingdto } from '../ticketbookingdto';

@Component({
  selector: 'app-activitybycustomer',
  templateUrl: './activitybycustomer.component.html',
  styleUrls: ['./activitybycustomer.component.css']
})
export class ActivitybycustomerComponent implements OnInit {

  activities:Activity[]=[];
  ticketbooking:Ticketbookingdto=new Ticketbookingdto();
  booking:boolean=false;
  msg:string;
  errorMsg:string;
  activity:Activity=new Activity();
  logindto:Logindto=new Logindto();

  constructor(private activityService:ActivityService,private storageService:StorageService) { }

  ngOnInit(): void {
    console.log("Am inside view component");
    this.activityService.viewAll().subscribe(data=>this.activities=data);
    console.log(this.activities);
  }
  book(activity:Activity) {
    console.log(JSON.stringify(activity));
    this.activity=activity;
    this.ticketbooking.ticketBookingId=0;
    this.ticketbooking.activityId=activity.activityId;
    this.ticketbooking.userId=this.storageService.userId;
    this.booking=true;
  }

  cancel() {
    this.booking=false;
  }

  bookticket() {
    this.activityService.bookticket(this.ticketbooking)
    .subscribe
    (
      (data)=>
      {
        console.log("data",data);
        this.msg="ticket booking successfull";
        this.errorMsg=undefined;
      },
      (error)=>
      {
        this.errorMsg="Ticket Date must be current or future";
        console.log(error.error);
      }
    );
  }
}
