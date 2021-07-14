import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  customer:any;

  constructor(public customerservice:CustomerService,public storageservice:StorageService) { }

  ngOnInit(): void {
    this.customerservice.viewById(this.storageservice.userId).subscribe(
      data=>{
        console.log(data);
        this.customer=data;
      }
    )
  }
}
