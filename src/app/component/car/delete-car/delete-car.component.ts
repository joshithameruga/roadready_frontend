import { Component } from '@angular/core';
import { Service } from '../../../service/service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent {


  constructor(private carService:Service){}

  deleteCarById(id:number){
        
     this.carService.deleteCarById(id).subscribe(() => { console.log('Car deleted successfully')});
    
  }
}
