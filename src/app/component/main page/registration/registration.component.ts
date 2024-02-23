import { Component } from '@angular/core';
import { Customer } from 'src/app/model/customer';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private customerService:Service){}

  insertCustomer(data:Customer){
        
    this.customerService.insert(data)
    .subscribe((customer) => {console.log("added customer is:"+customer);})
  }
   

}
