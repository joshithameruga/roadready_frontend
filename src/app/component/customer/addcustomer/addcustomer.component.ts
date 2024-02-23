import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {

  constructor(private customerService:Service){}

  insertCustomer(data:Customer){
        
    this.customerService.insert(data)
    .subscribe((customer) => {console.log("added customer is:"+customer);})
  }
  }

