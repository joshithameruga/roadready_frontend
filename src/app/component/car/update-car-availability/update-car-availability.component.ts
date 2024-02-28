import { Component } from '@angular/core';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-update-car-availability',
  templateUrl: './update-car-availability.component.html',
  styleUrls: ['./update-car-availability.component.css']
})
export class UpdateCarAvailabilityComponent {

  constructor(private carService:Service){}

  updateCarAvailability(carStatus:string,carID:number): void {
    if (carStatus && carID) {
        this.carService.updateCarStatus(carStatus, carID)
            .subscribe((car) => { console.log("updated car status is:" + car); });
    } else {
        console.error("Invalid data or data2");
    }
   /* this.carService.updateCarStatus(data,data2)
    .subscribe((car) => {console.log("updated car status is:"+car);})
  }*/
}

}
