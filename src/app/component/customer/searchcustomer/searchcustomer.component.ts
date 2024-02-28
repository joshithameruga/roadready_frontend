import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Service } from '../../../service/service';
import { Customer } from '../../../model/customer';

@Component({
  selector: 'app-searchcustomer',
  templateUrl: './searchcustomer.component.html',
  styleUrls: ['./searchcustomer.component.css']
})
export class SearchcustomerComponent {

  customerSearchList:Customer[] =[];

  constructor(private customerService:Service ,private router:Router){}
  data:string = '';

  ngOnInit(){

    this.getAllCustomers();
  }

  
 
    findCustomer(searchData:any){

        this.router.navigate(['/search/'+searchData.form.value.data])

        console.log(searchData.form.value.data);
        

    }

  getCustomerById(customerId:number){
    
    console.log(customerId)

      this.customerService.getCustomerById(customerId).subscribe((cust) => {console.log("customer obtained"+cust)});
  }

  getAllCustomers(){
    
    this.customerService.getAllCustomers().subscribe( (customers)=> {this.customerSearchList = customers;console.log("list" + customers);
    
  });
  }

  updateCustomer(data:Customer){
        
    this.customerService.updateCustomerDetails(data)
    .subscribe((customer) => {console.log("updated customer is:"+customer);})
  }
  deleteCustomerById(id:number){
        
    this.customerService.deleteCustomer(id).subscribe(() => { console.log('Customer deleted successfully')});

    this.getAllCustomers();
   
   
 }
  
}
