import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './loginService';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to AmusementPark';
  constructor(private route:Router,public storageservice:StorageService,public loginservice:LoginService){ } 

  ngOnInit():void{
    console.log("Am inside app component");
    
  }
logout()
{

this.loginservice.doLogout().subscribe();
this.storageservice.loginflag=false;
localStorage.removeItem("userinfo");
this.route.navigateByUrl("/login");
}
}
