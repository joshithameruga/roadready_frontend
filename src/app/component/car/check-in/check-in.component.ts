import { Component } from '@angular/core';
import { Service } from '../../../service/service';
import { Reservation } from '../../../model/reservation';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent {
  reservationSearchList: Reservation[] = [];

  constructor(private reservationService: Service) { }

  checkIn(reservationId: number) {

    console.log(reservationId)

    this.reservationService.CheckIn(reservationId).subscribe((r) => { console.log("reservation details obtained" + r) });
  }


}
