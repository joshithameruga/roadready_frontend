import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../../../service/service';

@Component({
  selector: 'app-deletecustomer',
  templateUrl: './deletecustomer.component.html',
  styleUrls: ['./deletecustomer.component.css']
})
export class DeletecustomerComponent {

  
  constructor(private customerService:Service){}

  deleteCustomerById(id:number){
        
     this.customerService.deleteCustomer(id).subscribe(() => { console.log('Customer deleted successfully')});
    
  }
  }
