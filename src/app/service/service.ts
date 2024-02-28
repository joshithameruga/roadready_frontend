import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { Car } from '../model/car';
import { PaymentAndReservation } from '../model/paymentAndReservation';
import { Payment } from '../model/payment';
import { Reservation } from '../model/reservation';
import { Admin } from '../model/admin';
import { Agent } from '../model/agent';
import { Feedback } from '../model/feedback';
import { JwtClientService } from './jwt-client.service';

@Injectable({
  providedIn: 'root'
})
export class Service {

  
  
  constructor(private http:HttpClient , private jwtService:JwtClientService ) { 

  }


   private getHeaders(): HttpHeaders {
   const token = localStorage.getItem('jwtToken');
   //const token = this.jwtService.getStoredToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',

      'Authorization': "Bearer "+`${token}`
       
       
    });  
  } 
  private getHeadersForFile(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    //const token = this.jwtService.getStoredToken();
     return new HttpHeaders({
       'Content-Type': 'multipart/form-data',
 
       'Authorization': "Bearer "+`${token}`
        
        
     }); 
 
     
   } 
   
  

 
 
     
  /*private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    //const token = this.jwtService.getStoredToken();
     return new HttpHeaders({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin': 'http://localhost:4200',
       'Authorization': `Bearer ${token}`
        
        
     }); 
 
     
   }*/


  baseURL:string='http://localhost:8080/roadready/'

  //customer

  getAllCustomers():Observable<Customer[]>{
    console.log(this.getHeaders());
    
    return this.http.get<Customer[]>("http://localhost:8080/roadready/customers/getAllCustomers",{headers:this.getHeaders()});

}

insertCustomer(body:Customer):Observable<Customer>{

  console.log(body);

    return this.http.post<Customer>(this.baseURL+"customers/addCustomer",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' } );

}

deleteCustomer(customerId:number):Observable<string>{

  return  this.http.delete<string>(this.baseURL+`customers/deleteCustomerById/${customerId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}


getCustomerById(customerId:number):Observable<Customer[]>{

  console.log(customerId)
 return this.http.get<Customer[]>(this.baseURL+`customers/getCustomerById/${customerId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}

updateCustomerDetails(body:Customer):Observable<Customer[]>{

  console.log(body);
  return this.http.put<Customer[]>(this.baseURL+"customers/updateCustomerDetails",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
}

findCustomer(data:string):Observable<Customer[]>{

  console.log(data)
  return this.http.get<Customer[]>(this.baseURL+`customers/getCustomerById/${data}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

 }


//car

  getAllCars(): Observable<Car[]> {

    return this.http.get<Car[]>(this.baseURL+"cars/getAllCars",{ headers: this.getHeaders()});

  }

  insertCar(body: Car) {

    console.log(body);

    return this.http.post<Car>(this.baseURL+"cars/addCar",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

  }
  updateCarDetails(body:Car):Observable<Car[]>{

    console.log(body);
    return this.http.put<Car[]>(this.baseURL+"cars/updateCarDetails",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
  }

  deleteCarById(id:number):Observable<string>{

    return  this.http.delete<string>(this.baseURL+`cars/deleteCarById/${id}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

  }
      //this._http.delete<Car>(this.baseUrl + id)
       // .subscribe((data) => { console.log(id + "record deleted"); }, err => { console.log(err) });

       findCar(data:string):Observable<Car[]>{


        console.log(data)
       return this.http.get<Car[]>(this.baseURL+`cars/getCarById/${data}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
  
      }
      getCarById(carId:number):Observable<Car[]>{
        console.log(carId);
return this.http.get<Car[]>(this.baseURL+`getCarById/${carId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });


      }

    getAvailableCars():Observable<Car[]>{
      console.log('Fetching available cars...');
      return this.http.get<Car[]>(this.baseURL+"cars/getAvailableCars",{headers:this.getHeaders()});
      
    }

  getCarByLocation(location:string):Observable<Car[]>{
    return this.http.get<Car[]>(this.baseURL+`cars/getCarByLocation/${location}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
  }

  getCarByMake(make:string):Observable<Car[]>{
    return this.http.get<Car[]>(this.baseURL+`cars/getCarByMake/${make}`);
  }

  getCarBySpecification(specification:string):Observable<Car[]>{
    return this.http.get<Car[]>(this.baseURL+`cars/getCarBySpecification/${specification}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
  }

  getCarByPassengerCapacity(passengerCapacity:number):Observable<Car[]>{
    return this.http.get<Car[]>(this.baseURL+`cars/getCarByPassengerCapacity/${passengerCapacity}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
  }


//paymentAndReservation

makePaymentAndReservation(body:PaymentAndReservation):Observable<PaymentAndReservation>{

  console.log(body);

    return this.http.post<PaymentAndReservation>(this.baseURL+"payments/makePaymentAndReservation",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}

//payments
getPaymentsOfCustomer(customerId:number):Observable<Payment[]>{

  console.log(customerId)
 return this.http.get<Payment[]>(this.baseURL+`payments/getPaymentsOfCustomer/${customerId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
}

viewpaymentHistory(customerId:number):Observable<Payment[]>{
  console.log(customerId)
 return this.http.get<Payment[]>(this.baseURL+`payments/viewPaymentHistory/${customerId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
}

getAllPayments():Observable<Payment[]>{
  
  return this.http.get<Payment[]>(this.baseURL+"payments/getAllPayments",{ headers: this.getHeaders() });
}


//reservations

cancelReservation(reservationId:number):Observable<string>{
  console.log(reservationId);
  return this.http.delete<string>(this.baseURL+`reservations/cancelReservation/${reservationId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}

modifyReservation(reservationId:number,dateOfPickup:Date,dateOfDropoff:Date){
  console.log(reservationId);
  //const body = { dateOfPickup, dateOfDropoff };            //doubt
 //this.http.put<Reservation[]>(this.baseURL+`reservations/modifyReservation/${reservationId}`,body);
}
getReservationsOfCustomer(customerId:number):Observable<Reservation[]>{

  console.log(customerId);
 return this.http.get<Reservation[]>(this.baseURL+`reservations/getReservationsOfCustomer/${customerId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
}

viewReservationHistory(customerId:number):Observable<Reservation[]>{
  console.log(customerId);
 return this.http.get<Reservation[]>(this.baseURL+`reservations/viewReservationHistory/${customerId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
}

getAllReservations():Observable<Reservation[]>{
  
  return this.http.get<Reservation[]>(this.baseURL+"reservations/getAllReservations",{ headers: this.getHeaders(), responseType: 'text' as 'json' });
}

//agent

insertAgent(body: Agent) {

  console.log(body);

  return this.http.post<Agent>(this.baseURL+"agents/createNewAgentAccount",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}

deleteAgentById(agentId:number):Observable<string>{

  return  this.http.delete<string>(this.baseURL+`agents/deleteAgentById/${agentId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}
getAgentById(agentId:number):Observable<Agent[]>{

  console.log(agentId)
 return this.http.get<Agent[]>(this.baseURL+`agents/getAgentById/${agentId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}
updateAgentDetails(body:Agent):Observable<Agent[]>{

  console.log(body);
  return this.http.put<Agent[]>(this.baseURL+"agents/updateAgentById",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
}

getAllAgents(): Observable<Agent[]> {

  return this.http.get<Agent[]>(this.baseURL+"agents/getAllAgents",{headers:this.getHeaders()});

}

/*CheckIn(reservationId:number):Observable<Reservation[]>{
  console.log(reservationId);
  return this.http.get<Reservation[]>(this.baseURL+`agents/checkin/${reservationId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
}*/


 /* checkOut(reservationId:number):Observable<Reservation[]>{
        console.log(reservationId);
        return this.http.get<Reservation[]>(this.baseURL+`agents/checkout/${reservationId}/${carStatus}`);
      }*/

//admin

insertAdmin(body: Admin) {

  console.log(body);

  return this.http.post<Admin>(this.baseURL+"admin/addAdmin",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}
getReportById(customerId:number):Observable<Admin[]>{

  console.log(customerId)
 return this.http.get<Admin[]>(this.baseURL+`admin/revenueGeneratedByCustomer/${customerId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}
getReportByDates(start :Date, end :Date ):Observable<Admin[]>{

  console.log( )
 return this.http.get<Admin[]>(this.baseURL+`admin/revenueReportBetweenDates/${start}/${end}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}
getAllRevenueReport(): Observable<Admin[]> {

  return this.http.get<Admin[]>(this.baseURL+"admin/totalRevenueReport",{ headers: this.getHeaders()});

}

//feedbacks

viewAllFeedbacks(): Observable<Feedback[]> {

  return this.http.get<Feedback[]>(this.baseURL+"feedbacks/viewAllFeedbacks",{ headers: this.getHeaders()});

}

insertCustomerFeedback(body: Feedback) {

  console.log(body);

  return this.http.post<Feedback>(this.baseURL+"feedbacks/CustomerFeedback",body,{ headers: this.getHeaders(), responseType: 'text' as 'json' });

}

insertAdminFeedback(feedbackId:number,adminFeedback:string){
  return this.http.post<String>(this.baseURL+`feedbacks/adminFeedBack/${feedbackId}/${adminFeedback}`,{headers:this.getHeaders()})
}


//customerIdentity

/*uploadCustomerIdentity(file: FileList | null, customerId:number):Observable<String>{
  console.log(file,customerId);
  const formData = new FormData();
  if (file) {
    for (let i = 0; i < file.length; i++) {
  formData.append('file', file[i]);
    }
  }
    else{
      console.error("file not found")
    }

    console.log(formData);
  const url = `http://localhost:8080/roadready/customerIdentity/uploadCustomerIdentity/${customerId}`;
  return this.http.post<String>(url, formData ,{ headers: this.getHeaders(), responseType: 'text' as 'json' } );
  }*/
  uploadCustomerIdentity(customerId: number, formData: FormData):Observable<String>{
  const url = `http://localhost:8080/roadready/customerIdentity/uploadCustomerIdentity/${customerId}`;
    return this.http.post<any>(url, formData,{ headers: this.getHeadersForFile() , responseType:'text' as 'json'});
  }



  CheckIn(reservationId:number):Observable<string>{
    console.log(reservationId);
    return this.http.get<string>(`this.baseURL+agents/checkin/${reservationId}`,{ headers: this.getHeaders(), responseType: 'text' as 'json' });
  }
  
  updateCarStatus (carStatus:string,carID:number):Observable<Car[]>{
    const payload = { carStatus, carID }; // Assuming your API expects data and data2 as JSON properties
   // return this.http.put(this.baseURL, payload);
   //console.log(body);
    return this.http.put<Car[]>(this.baseURL+"agents/updateCarAvailability/",payload,{ headers: this.getHeaders()});
  
  }
  
    checkingOut(carStatus:string,reservationId:number): Observable<string>{
          console.log(reservationId);
          return this.http.get<string>(`this.baseURL+agents/checkout/${reservationId}/${carStatus}`,{ headers: this.getHeaders()});
        }
}
