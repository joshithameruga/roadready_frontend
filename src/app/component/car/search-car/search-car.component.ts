import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from '../../../service/service';
import { Car } from '../../../model/car';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.css']
})
export class SearchCarComponent {



  carSearchList: Car[] = [];

  constructor(private carService: Service ,private router:Router){}
  data:string = '';
   

    ngOnInit(){
      this.getAllCars();
    }
  
 
    findCar(searchData:any){

        this.router.navigate(['/search/'+searchData.form.value.data])

        console.log(searchData.form.value.data);
        

    }

  getCarById(carId: number) {

    console.log(carId)

    this.carService.getCarById(carId).subscribe((c) => { console.log("car obtained" + c) });
  }

  getAllCars() {

    this.carService.getAllCars().subscribe((cars) => {
      this.carSearchList = cars; console.log("list" + cars);

    });


  }
  deleteCarById(id:number){
        
    this.carService.deleteCarById(id).subscribe(() => { console.log('Car deleted successfully')});
   
 }
  getCarImage(car:any){

  }



}
