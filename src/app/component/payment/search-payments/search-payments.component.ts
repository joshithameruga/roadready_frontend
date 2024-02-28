import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from '../../../service/service';
import { Payment } from '../../../model/payment';

@Component({
  selector: 'app-search-payments',
  templateUrl: './search-payments.component.html',
  styleUrls: ['./search-payments.component.css']
})
export class SearchPaymentsComponent {

  
 paymentsOfCustomerList:Payment[] =[];
 allPayments:Payment[]=[]
 
  constructor(private paymentAndReservationService:Service,private router:Router){}
  data:string = '';


  findPayments(searchData:any){

        this.router.navigate(['/search/'+searchData.form.value.data])

        console.log(searchData.form.value.data);
        

    }
  getPaymentsOfCustomer(customerId:number){
    this.paymentAndReservationService.getPaymentsOfCustomer(customerId).subscribe((payments)=> {this.paymentsOfCustomerList = payments;console.log("list" + payments)});
  }
  
  viewPaymentHistory(customerId:number){
    this.paymentAndReservationService.viewpaymentHistory(customerId).subscribe((payments)=> {this.paymentsOfCustomerList = payments;console.log("list" + payments)});
  }
  
  getAllPayments(){
    this.paymentAndReservationService.getAllPayments().subscribe( (payments)=> {this.allPayments = payments;console.log("list" + payments)});
  }
}
