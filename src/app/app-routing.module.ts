import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ActivitybycustomerComponent } from './activitybycustomer/activitybycustomer.component';
import { AddactivityComponent } from './addactivity/addactivity.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { TicketbycustomerComponent } from './ticketbycustomer/ticketbycustomer.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'home', component:HomeComponent},
  {path:'activity',component:ActivityComponent},
  {path:'activitybycustomer',component:ActivitybycustomerComponent},
  {path:'addactivity',component:AddactivityComponent},
  {path:'ticketbooking',component:TicketbookingComponent},
  {path:'login',component:LoginComponent},
  {path:'ticketbycustomer',component:TicketbycustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
