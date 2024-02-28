import { Component } from '@angular/core';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {

  constructor(private checkOutService:Service){}

  checkOut(carStatus:string,reservationId:number): void {
    if (carStatus && reservationId) {
        this.checkOutService.checkingOut(carStatus, reservationId)
            .subscribe((car) => { console.log("updated car status is:" + car); });
    } else {
        console.error("Invalid data or data2");
    }
 
}
}
