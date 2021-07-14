import { Component, OnInit } from '@angular/core';
import { TicketbookingService } from '../ticketbooking.service';

@Component({
  selector: 'app-viewbydate',
  templateUrl: './viewbydate.component.html',
  styleUrls: ['./viewbydate.component.css']
})
export class ViewbydateComponent implements OnInit {
  tickets:any=[];
  ticketdt: string;
  msg: string;
  constructor(public ticketservice:TicketbookingService) { }

  ngOnInit(): void {
  }
  viewtickets() {
    this.ticketservice.viewTicketsByDate(this.ticketdt).subscribe(
      data => {this.tickets=data;this.msg=undefined},
      error => {this.msg="No tickets found"}
    );
  }
}
