import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-updateactivity',
  templateUrl: './updateactivity.component.html',
  styleUrls: ['./updateactivity.component.css']
})
export class UpdateactivityComponent implements OnInit {
  
  activities:Activity[]=[];
  modifyActivity=new Activity();
  updateDiv:boolean=false;
  msg:string;
  errorMsg:string;
  constructor(private activityService:ActivityService) { }

  ngOnInit(): void {
    console.log("Am inside view component");
    this.activityService.viewAll().subscribe(data=>this.activities=data);
    console.log(this.activities);
  }

  update(activity:Activity)
  {
   
    console.log(JSON.stringify(activity));
    this.modifyActivity=activity;
    this.updateDiv=true;//make update division visible
  }
  cancel()
  {
    this.updateDiv=false;//make update division invisible
  }
  updateActivity(){
 
    this.updateDiv=false;//make update division invisible
    this.activityService.UpdateActivity(this.modifyActivity)
          .subscribe(data=>{
            this.msg="Activity Updated";
            this.errorMsg=undefined;
            this.activityService.viewAll().subscribe(data=>this.activities=data);
            console.log(this.activities);
          },
            error=>{
              this.errorMsg=error.error;
              this.msg=undefined;
            });
  }
}