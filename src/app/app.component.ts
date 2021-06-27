import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Amusement Park';
  isAdmin:boolean=false;
  constructor(private route:Router){ } 

  ngOnInit():void{
    console.log("Am inside app component");
    this.route.navigateByUrl("/admin");
    this.route.navigateByUrl("/addcustomer");
  }

}
