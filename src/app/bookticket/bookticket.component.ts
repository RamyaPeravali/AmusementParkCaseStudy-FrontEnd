import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { Customer } from '../customer';
import { Ticketbooking } from '../ticketbooking';
import { TicketbookingService } from '../ticketbooking.service';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  ticketbookings:Ticketbooking=new Ticketbooking();
  customer:Customer=new Customer();
  activity:Activity=new Activity();
  
  msg:string;
  errorMsg:string;
  constructor(private ticketbookingService:TicketbookingService) { }

  ngOnInit(): void {
    
  }
  bookTicket(){
    this.ticketbookingService.bookticket(this.ticketbookings)
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
