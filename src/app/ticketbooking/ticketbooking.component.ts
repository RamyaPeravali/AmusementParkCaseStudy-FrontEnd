import { Component, OnInit } from '@angular/core';
import { Ticketbooking } from '../ticketbooking';
import { TicketbookingService } from '../ticketbooking.service';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.css']
})
export class TicketbookingComponent implements OnInit {
  ticketbookings:Ticketbooking[]=[];
  
  msg:string;
  errorMsg:string;

  constructor(private ticketbookingService:TicketbookingService) { }

  ngOnInit(): void {
    console.log("Am inside view component");
    this.ticketbookingService.viewAll().subscribe(data=>{console.log(data);this.ticketbookings=data});
    console.log(this.ticketbookings);
  }

}
