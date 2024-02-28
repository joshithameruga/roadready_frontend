import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../../../model/reservation';
import { Service } from '../../../service/service';


@Component({
  selector: 'app-search-reservations',
  templateUrl: './search-reservations.component.html',
  styleUrls: ['./search-reservations.component.css']
})
export class SearchReservationsComponent {

  reservationSearchList:Reservation[] =[];

  constructor(private reservationService:Service , private route: ActivatedRoute){}

  getReservationOfCustomer(reservationId:number){
    
    console.log(reservationId)

      this.reservationService.getReservationsOfCustomer(reservationId).subscribe((cust) => {console.log("customer obtained"+cust)});
  }

  getAllReservations(){
    
    this.reservationService.getAllReservations().subscribe((reservations)=> {this.reservationSearchList = reservations;console.log("list" + reservations);
    
  });
  }
}
