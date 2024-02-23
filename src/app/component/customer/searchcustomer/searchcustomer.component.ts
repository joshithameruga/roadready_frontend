import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent {

  customerSearchList:Customer[] =[];

  constructor(private customerService:Service){}

  getCustomerById(customerId:number){
    
    console.log(customerId)

      this.customerService.getById(customerId).subscribe((cust) => {console.log("customer obtained"+cust)});
  }

  getAllCustomers(){
    
    this.customerService.getAllCustomers().subscribe( (customers)=> {this.customerSearchList = customers;console.log("list" + customers);
    
  });
  }


}
