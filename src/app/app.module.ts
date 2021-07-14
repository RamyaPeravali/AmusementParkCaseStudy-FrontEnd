import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ActivityComponent } from './activity/activity.component';
import { AddactivityComponent } from './addactivity/addactivity.component';
//import { BookticketComponent } from './bookticket/bookticket.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ActivitybycustomerComponent } from './activitybycustomer/activitybycustomer.component';
import { TicketbycustomerComponent } from './ticketbycustomer/ticketbycustomer.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { ViewbydateComponent } from './viewbydate/viewbydate.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    ActivityComponent,
    TicketbookingComponent,
    AddactivityComponent,  
    LoginComponent,
    ActivitybycustomerComponent,
    TicketbycustomerComponent,
    ViewbydateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
