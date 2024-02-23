import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import { Car } from '../model/car';
import { Agent } from '../model/agent';
import { Admin } from '../model/admin';
import { Feedback } from '../model/feedback';
@Injectable({
  providedIn: 'root'
})
export class Service {


  
  constructor(private http:HttpClient) { }

  baseURL:string='http://localhost:8080/roadready/';

    //customer

  getAllCustomers():Observable<Customer[]>{

    return this.http.get<Customer[]>(this.baseURL+"customers/getAllCustomers");
}

insert(body:Customer):Observable<Customer>{

  console.log(body);
    return this.http.post<Customer>(this.baseURL+"customers/addCustomer",body);

}
delete(customerId:number):Observable<string>{

  return  this.http.delete<string>(this.baseURL+`customers/deleteCustomerById/${customerId}`);

}
getCustomerById(customerId:number):Observable<Customer[]>{

  console.log(customerId)
 return this.http.get<Customer[]>(this.baseURL+`customers/getCustomerById/${customerId}`);

}
updateCustomerDetails(body:Customer):Observable<Customer[]>{

  console.log(body);
  return this.http.put<Customer[]>(this.baseURL+"customers/updateCustomerDetails",body);
}



//car



  getAllCars(): Observable<Car[]> {

    return this.http.get<Car[]>(this.baseURL+"cars/getAllCars");

  }
  insertCar(body: Car) {

    console.log(body);

    return this.http.post<Car>(this.baseURL+"cars/addCar",body);

  }
  updateCar(body: Car) {
    return this.http.put<Car>(this.baseURL+"cars/updateCarDetails",body);

   // this._http.post<Car>(this.baseUrl, car)
     // .subscribe((response) => { console.log('car updated', response) })

  }
  deleteCarById(id:number):Observable<string>{

    return  this.http.delete<string>(this.baseURL+`cars/deleteCarById/${id}`);

  }
      //this._http.delete<Car>(this.baseUrl + id)
       // .subscribe((data) => { console.log(id + "record deleted"); }, err => { console.log(err) });

       find(data:string):Observable<Car[]>{


        console.log(data)
       return this.http.get<Car[]>(this.baseURL+`cars/getCarById/${data}`);
  
      }
      getById(carId:number):Observable<Car[]>{
        console.log(carId);
return this.http.get<Car[]>(this.baseURL+`getCarById/${carId}`);


      }

      //agent

      insertAgent(body: Agent) {

        console.log(body);
    
        return this.http.post<Agent>(this.baseURL+"agents/addAgent",body);
    
      }

      deleteAgentById(agentId:number):Observable<string>{

        return  this.http.delete<string>(this.baseURL+`agents/deleteAgentById/${agentId}`);
      
      }
      getAgentById(agentId:number):Observable<Agent[]>{
      
        console.log(agentId)
       return this.http.get<Agent[]>(this.baseURL+`agents/getAgentById/${agentId}`);
      
      }
      updateAgent(body:Agent):Observable<Agent[]>{
      
        console.log(body);
        return this.http.put<Agent[]>(this.baseURL+"agents/updateAgentById",body);
      }
      getAllAgents(): Observable<Agent[]> {

        return this.http.get<Agent[]>(this.baseURL+"agents/getAllAgents");
    
      }

      //admin

      insertAdmin(body: Admin) {

        console.log(body);
    
        return this.http.post<Admin>(this.baseURL+"admin/addAdmin",body);
    
      }
      getReportById(customerId:number):Observable<Admin[]>{
      
        console.log(customerId)
       return this.http.get<Admin[]>(this.baseURL+`admin/revenueGeneratedByCustomer/${customerId}`);
      
      }
      /*getReportByDates(   :number):Observable<Admin[]>{
      
        console.log( )
       return this.http.get<Admin[]>(this.baseURL+`admin/revenueReportBetweenDates/${agentId}`);
      
      }*/
      getAllRevenueReport(): Observable<Admin[]> {

        return this.http.get<Admin[]>(this.baseURL+"admin/totalRevenueReport");
    
      }

      //feedbacks

      viewAllFeedbacks(): Observable<Feedback[]> {

        return this.http.get<Feedback[]>(this.baseURL+"feedbacks/viewAllFeedbacks");
    
      }

      insertCustomerFeedback(body: Feedback) {

        console.log(body);
    
        return this.http.post<Feedback>(this.baseURL+"feedbacks/CustomerFeedback",body);
    
      }
}
