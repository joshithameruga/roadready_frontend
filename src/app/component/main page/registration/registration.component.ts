import { Component } from '@angular/core';
import { Service } from '../../../service/service';
import { Customer } from '../../../model/customer';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private customerService:Service){}

  insertCustomer(data:Customer){
        
    this.customerService.insertCustomer(data)
    .subscribe((customer) => {console.log("added customer is:"+customer);})
  }
   

}
