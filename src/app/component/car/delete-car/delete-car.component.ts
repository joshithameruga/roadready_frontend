import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent {

   
  constructor(private carService:Service){}

  deleteCarById(id:number){
        
     this.carService.delete(id).subscribe(() => { console.log('Car deleted successfully')});
    
  }
}
