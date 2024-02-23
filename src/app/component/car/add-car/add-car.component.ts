import { Component } from '@angular/core';
import { Car } from 'src/app/model/car';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {


  constructor(private carService: Service) { }

  addCar(data: Car) {
    console.log(data);
    this.carService.insertCar(data);

  }
}
