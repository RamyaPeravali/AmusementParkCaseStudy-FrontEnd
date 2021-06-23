import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ActivityComponent } from './activity/activity.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TicketbookingComponent } from './ticketbooking/ticketbooking.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'home', component:HomeComponent},
  {path:'activity',component:ActivityComponent},
  {path:'customer',component:CustomerComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'ticketbooking',component:TicketbookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
