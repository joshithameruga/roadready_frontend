import { Car } from "./car";
import { Customer } from "./customer";
import { Payment } from "./payment";

export interface Reservation {
    resevationId: number;
    reservationStatus: string;
    dateOfReservation: Date; 
    dateOfPickup: Date; 
    dateOfDropoff: Date; 
    customer: Customer;
    car: Car;
    payment: Payment;
  }