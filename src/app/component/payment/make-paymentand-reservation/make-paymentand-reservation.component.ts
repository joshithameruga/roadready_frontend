import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../../service/service';
import { PaymentAndReservation } from '../../../model/paymentAndReservation';

@Component({
  selector: 'app-make-paymentand-reservation',
  templateUrl: './make-paymentand-reservation.component.html',
  styleUrls: ['./make-paymentand-reservation.component.css']
})
export class MakePaymentandReservationComponent {
  /*data!:any;
  car!:any;
  rate= this.car.dailyRate;
  start=this.data.dateOfPickup;
  end=this.data.dateOfDropOff;


    // Set both dates to the start of the day to ignore time
   startDate = new Date(this.start.getFullYear(), this.start.getMonth(), this.start.getDate());
  endDate = new Date(this.end.getFullYear(), this.end.getMonth(), this.end.getDate());
  
    // Calculate the difference in milliseconds
   diff = Math.abs(this.end.getTime() - this.start.getTime());
  
    // Convert milliseconds to days
  days = Math.ceil(this.diff / (1000 * 60 * 60 * 24));

 // amount=this.rate*this.days;
 amount=100;  */

 
   rate!: number;
   dateOfPickup:  Date = new Date();
  dateOfDropOff: Date = new Date();

  minDate!: string;
  differenceInMilliseconds!: number;
  millisecondsPerDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
  numberOfDays!: number;
  amount!: number;
  
  constructor(private paymentAndReservationService:Service , private route:ActivatedRoute , private carService:Service) {

    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

 ngOnInit(){

  
     this.route.queryParams.subscribe(params => {
            this.rate = +params['rate'];
        });
    
        this.calculateAmount();
}  

calculateAmount(): void {
  this.differenceInMilliseconds = this.dateOfDropOff.getTime() - this.dateOfPickup.getTime();
  this.numberOfDays = Math.floor(this.differenceInMilliseconds / this.millisecondsPerDay);
  this.amount = this.numberOfDays * this.rate;
}
 

  makePaymentAndReservation(data:PaymentAndReservation){
        
    
    this.paymentAndReservationService.makePaymentAndReservation(data)
    .subscribe((PaymentAndReservation) => {console.log("payment made : "+PaymentAndReservation);})
  }



}
