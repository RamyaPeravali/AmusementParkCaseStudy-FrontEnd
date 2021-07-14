import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ActivityComponent } from './activity/activity.component';
import { AddactivityComponent } from './addactivity/addactivity.component';
import { LoginComponent } from './login/login.component';
import { ActivitybycustomerComponent } from './activitybycustomer/activitybycustomer.component';
import { TicketbycustomerComponent } from './ticketbycustomer/ticketbycustomer.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { ViewbydateComponent } from './viewbydate/viewbydate.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateactivityComponent } from './updateactivity/updateactivity.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ActivityComponent,
    TicketbookingComponent,
    AddactivityComponent,  
    LoginComponent,
    ActivitybycustomerComponent,
    TicketbycustomerComponent,
    ViewbydateComponent,
    RegistrationComponent,
    ProfileComponent,
    UpdateactivityComponent
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
