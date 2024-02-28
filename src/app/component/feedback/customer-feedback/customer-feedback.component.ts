import { Component } from '@angular/core';
import { Service } from '../../../service/service';
import { Feedback } from '../../../model/feedback';


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
