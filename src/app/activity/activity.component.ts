import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  activities:Activity[]=[];
  
  msg:string;
  errorMsg:string;
  constructor(private activityService:ActivityService) { }

  ngOnInit(): void {
    console.log("Am inside view component");
    this.activityService.viewAll().subscribe(data=>this.activities=data);
    console.log(this.activities);
  }

}

