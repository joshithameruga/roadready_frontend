import { Component } from '@angular/core';
import { Feedback } from 'src/app/model/feedback';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-customer-feedback',
  templateUrl: './customer-feedback.component.html',
  styleUrls: ['./customer-feedback.component.css']
})
export class CustomerFeedbackComponent {

  constructor(private feedbackService:Service){}

  insertCustomerFeedback(data:Feedback){
        
    this.feedbackService.insertCustomerFeedback(data)
    .subscribe((customerfb) => {console.log("added customer's feedback is:"+customerfb);})
  }
}
