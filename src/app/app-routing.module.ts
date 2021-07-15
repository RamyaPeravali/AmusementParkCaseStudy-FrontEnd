import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { ActivitybycustomerComponent } from './activitybycustomer/activitybycustomer.component';
import { AddactivityComponent } from './addactivity/addactivity.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';
import { UpdateactivityComponent } from './updateactivity/updateactivity.component';
import { ViewbydateComponent } from './viewbydate/viewbydate.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'activity',component:ActivityComponent},
  {path:'activitybycustomer',component:ActivitybycustomerComponent},
  {path:'addactivity',component:AddactivityComponent},
  {path:'login',component:LoginComponent},
  {path:'viewtktbydate',component:ViewbydateComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'profile',component:ProfileComponent},
  {path:'ticketbooking',component:TicketbookingComponent},
  {path: 'updateactivity',component:UpdateactivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
