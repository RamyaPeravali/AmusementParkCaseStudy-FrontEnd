export class Ticketbooking {
    ticketBookingId: number;
    customer: Customer;
    activity: Activity;
    dateOfBooking: Date;
    dateOfVisiting: Date;
    numberOfTickets: number;
    bill: number;
}

export class Customer {
    customerId: number;
    userId: number;
    username: string;
    password: string;
    mobileNumber: string;
    email: string;
    address: string;
}

export class Activity {
    activityId: number;
    description: string;
    charges: number;
}
