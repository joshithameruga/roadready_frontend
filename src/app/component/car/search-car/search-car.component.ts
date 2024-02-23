import { Component } from '@angular/core';
import { Car } from 'src/app/model/car';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
})
export class SearchCarComponent {

  carSearchList: Car[] = [];

  constructor(private carService: Service) { }

  getCarById(carId: number) {

    console.log(carId)

    this.carService.getById(carId).subscribe((c) => { console.log("car obtained" + c) });
  }

  getAllCars() {

    this.carService.getAllCars().subscribe((cars) => {
      this.carSearchList = cars; console.log("list" + cars);

    });
  }

}
