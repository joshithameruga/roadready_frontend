import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../../../service/service';
import { Customer } from '../../../model/customer';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent {

  constructor(private customerService:Service){}

  insertCustomer(data:Customer){
        
    this.customerService.insertCustomer(data)
    .subscribe((customer) => {console.log("added customer is:"+customer);})
  }
  }

