import { Component } from '@angular/core';
import { Feedback } from 'src/app/model/feedback';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-searchfeedback',
  templateUrl: './searchfeedback.component.html',
  styleUrls: ['./searchfeedback.component.css']
})
export class SearchfeedbackComponent {
  feedbackSearchList:Feedback[] =[];

  constructor(private feedbackService:Service){}
  getAllFeedbacks(){
    
    this.feedbackService.viewAllFeedbacks().subscribe( (fb)=> {this.feedbackSearchList = fb;console.log("list" + fb);
    
  });
  }
}
