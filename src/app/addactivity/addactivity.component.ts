import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./addactivity.component.css']
})
export class AddactivityComponent implements OnInit {
  activity:Activity=new Activity();
  
  msg:String;
  errorMsg:String;
  constructor(private activityService:ActivityService,public storageservice:StorageService,public router:Router) { }


  ngOnInit(): void {
    if(this.storageservice.loginflag==false || this.storageservice.role !='admin')
    this.router.navigateByUrl("/login");
  }
  addActivity(){
    this.activityService.addActivity(this.activity)
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
