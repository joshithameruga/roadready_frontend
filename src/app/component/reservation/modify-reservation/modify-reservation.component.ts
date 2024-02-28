import { Component } from '@angular/core';
import { Service } from '../../../service/service';

@Component({
  selector: 'app-modify-reservation',
  templateUrl: './modify-reservation.component.html',
  styleUrls: ['./modify-reservation.component.css']
})
export class ModifyReservationComponent {

  constructor(private resevationService:Service){}

  modifyReservation(){
    
  }
}
