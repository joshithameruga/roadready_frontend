import { Component } from '@angular/core';
import { Service } from '../../../service/service';
import { Customer } from '../../../model/customer';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent {
 
  constructor(private customerService:Service){}

  updateCustomer(data:Customer){
        
    this.customerService.updateCustomerDetails(data)
    .subscribe((customer) => {console.log("updated customer is:"+customer);})
  }
  
}
