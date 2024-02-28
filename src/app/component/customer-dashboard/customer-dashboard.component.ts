import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Car } from '../../model/car';
import { Service } from '../../service/service';
import { JwtClientService } from '../../service/jwt-client.service';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.css']
})
export class CustomerDashboardComponent {

 

  constructor(private service:Service,private router: Router,private jwtService:JwtClientService){}
   
  carSearchList:Car[] = [];
  carFilterList:Car[]=[];
  imageUrl : string ="";

  isRadioButtonClicked: boolean = false; 

  price: number=0;

  ngOnInit(){
    this.getAvailableCars();
    
  }

        
  applyLocationFilter(filter:string){
            
          
    this.carFilterList = this.carSearchList.filter(car => car.location === filter);
    this.isRadioButtonClicked = true;
    
  } 
  

  applyMakeFilter(filter:string){
    this.carFilterList = this.carSearchList.filter(car => car.make === filter);
    this.isRadioButtonClicked = true;
  }
  
  applySpecificationFilter(filter:string){

    this.carFilterList = this.carSearchList.filter(car => car.specification === filter);
    this.isRadioButtonClicked = true;
  }
  

  applyPassengerFilter(filter:number){

    this.carFilterList = this.carSearchList.filter(car => car.passengerCapacity === filter);
    this.isRadioButtonClicked = true;
  }

        
        
        isTabOpen: boolean = false;

        toggleTab() {
          this.isTabOpen = !this.isTabOpen;
        }
      
        openTab(tab:string){

        }

  clearSelection(){
    this.isRadioButtonClicked=false;
 
}

        
getAvailableCars(){
  this.service.getAvailableCars().subscribe((cars) => {
    this.carSearchList = cars;
    console.log("list", cars); // Log the car list
  });
}

getCarImage(car: any): string {
  // Define the image URL based on the make and model of the car
  // You can customize this logic based on your image naming convention or URL structure
  if (car.make === 'Maruti Suzuki') {
    if (car.model === 'Swift') {
      return "../assets/maruti_swift.jpg";
    } else if (car.model === 'Baleno') {
      return  "../assets/maruti_baleno.jpg";
    } else if (car.model === 'Dzire') {
      return "../assets/maruti_dzire.jpg";
    } else if (car.model === 'Alto') {
      return "../assets/maruti_alto.jpg";
    } else if (car.model === 'Vitara Brezza') {
      return "../assets/maruti_vitara_brezza.jpg";
    }
  } else if (car.make === 'Hyundai') {
    if (car.model === 'i20') {
      return "../assets/hyundai_i20.jpg";
    } else if (car.model === 'Creta') {
      return "../assets/hyundai_creta.jpg";
    } else if (car.model === 'Venue') {
      return "../assets/hyundai_venue.jpg";
    } else if (car.model === 'Grand i10') {
      return "../assets/hyundai_grand_i10.jpg";
    } else if (car.model === 'Verna') {
      return "../assets/hyundai_verna.jpg";
    }
  } else if (car.make === 'Tata Motors') {
    if (car.model === 'Nexon') {
      return "../assets/tata_nexon.jpg";
    } else if (car.model === 'Altroz') {
      return "../assets/tata_altroz.jpg";
    } else if (car.model === 'Tiago') {
      return "../assets/tata_tiago.jpg";
    } else if (car.model === 'Harrier') {
      return "../assets/tata_harrier.jpg";
    } else if (car.model === 'Safari') {
      return "../assets/tata_safari.jpg";
    }
  } else if (car.make === 'Mahindra') {
    if (car.model === 'Scorpio') {
      return "../assets/mahindra_scorpio.jpg";
    } else if (car.model === 'XUV300') {
      return "../assets/mahindra_xuv300.jpg";
    } else if (car.model === 'Thar') {
      return "../assets/mahindra_thar.jpg";
    } else if (car.model === 'Bolero') {
      return "../assets/mahindra_bolero.jpg";
    } else if (car.model === 'XUV500') {
      return "../assets/mahindra_xuv500.jpg";
    }
  } // Add more else if blocks for other makes and their models
  // Add more conditions for other makes and their models here
  // ...
  
    return "../assets/carimage.png"; // Default image path if no specific image found
  
  
}


logout(): void {

  this.jwtService.clearStoredToken();
  this.router.navigate(['/login']);
}






}

