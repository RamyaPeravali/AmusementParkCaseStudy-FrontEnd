import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ActivitybycustomerComponent } from './activitybycustomer/activitybycustomer.component';
import { AddactivityComponent } from './addactivity/addactivity.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AdminComponent } from './admin/admin.component';
import { BookticketComponent } from './bookticket/bookticket.component';
import { HomeComponent } from './home/home.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { UpdateticketComponent } from './updateticket/updateticket.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'home', component:HomeComponent},
  {path:'activity',component:ActivityComponent},
  {path:'activitybycustomer',component:ActivitybycustomerComponent},
  {path:'addactivity',component:AddactivityComponent},
  {path:'addcustomer',component:AddcustomerComponent},
  {path:'updatecustomer',component:UpdatecustomerComponent},
  {path:'ticketbooking',component:TicketbookingComponent},
  {path:'bookticket',component:BookticketComponent},
  {path:'updateticket',component:UpdateticketComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
