export class Ticketbooking {
    ticketBookingId:number;
	activity:Activity=new Activity();
	customer:Customer=new Customer();
    dateOfBooking:Date;
	dateOfVisiting:Date;
	numberOfTickets:number;
    bill:number;
}
export class Activity {
    activityId:number;
    description:string;
    charges:string;
}

export class Customer {
    customerId:number;
    userId:number;
    username:string;
    password:string;
    mobileNumber:string;
    email:string;
    address:string;
}
