import { Component, OnInit } from '@angular/core';
import { Ticketbooking } from '../ticketbooking';
import { TicketbookingService } from '../ticketbooking.service';

@Component({
  selector: 'app-ticketbycustomer',
  templateUrl: './ticketbycustomer.component.html',
  styleUrls: ['./ticketbycustomer.component.css']
})
export class TicketbycustomerComponent implements OnInit {

  tickets:Ticketbooking[] =[];

  msg:string;
  errorMsg:string;

  constructor(private ticketbookingService:TicketbookingService) { }

  ngOnInit(): void {
    console.log("Am inside view component");
    this.ticketbookingService.viewAll().subscribe(data=>this.tickets=data);
    console.log(this.tickets);
  }

}
