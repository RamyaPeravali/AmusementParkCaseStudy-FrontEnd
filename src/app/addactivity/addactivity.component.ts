import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./addactivity.component.css']
})
export class AddactivityComponent implements OnInit {
  activity:Activity=new Activity();
  msg:String;
  errorMsg:String;
  constructor(private activityService:ActivityService) { }


  ngOnInit(): void {
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
