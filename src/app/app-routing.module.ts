import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './component/customer/addcustomer/addcustomer.component';
import { DeletecustomerComponent } from './component/customer/deletecustomer/deletecustomer.component';
import { SearchcustomerComponent } from './component/customer/searchcustomer/searchcustomer.component';
import { UpdatecustomerComponent } from './component/customer/updatecustomer/updatecustomer.component';
import { ContactUsComponent } from './component/main page/contact-us/contact-us.component';
import { HomeComponent } from './component/main page/home/home.component';
import { AboutUsComponent } from './component/main page/about-us/about-us.component';
import { RegistrationComponent } from './component/main page/registration/registration.component';
import { LoginComponent } from './component/main page/login/login.component';
import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { AdminFeedbackComponent } from './component/feedback/admin-feedback/admin-feedback.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AgentDashboardComponent } from './component/agent-dashboard/agent-dashboard.component';
import { SearchCarComponent } from './component/car/search-car/search-car.component';
import { CustomerFeedbackComponent } from './component/feedback/customer-feedback/customer-feedback.component';
import { UploadCustomerIdentityComponent } from './component/customerIdentity/upload-customer-identity/upload-customer-identity.component';
import { DeleteCustomerIdentityComponent } from './component/customerIdentity/delete-customer-identity/delete-customer-identity.component';
import { MakePaymentandReservationComponent } from './component/payment/make-paymentand-reservation/make-paymentand-reservation.component';
import { SearchPaymentsComponent } from './component/payment/search-payments/search-payments.component';
import { ModifyReservationComponent } from './component/reservation/modify-reservation/modify-reservation.component';
import { CancelReservationComponent } from './component/reservation/cancel-reservation/cancel-reservation.component';
import { SearchReservationsComponent } from './component/reservation/search-reservations/search-reservations.component';
import { AddCarComponent } from './component/car/add-car/add-car.component';
import { DeleteCarComponent } from './component/car/delete-car/delete-car.component';
import { UpdateCarComponent } from './component/car/update-car/update-car.component';
import { AddAgentComponent } from './component/agent/add-agent/add-agent.component';
import { DeleteAgentComponent } from './component/agent/delete-agent/delete-agent.component';
import { UpdateAgentComponent } from './component/agent/update-agent/update-agent.component';
import { SearchAgentComponent } from './component/agent/search-agent/search-agent.component';
import { SearchfeedbackComponent } from './component/feedback/searchfeedback/searchfeedback.component';
import { RevenuereportComponent } from './component/admin/revenuereport/revenuereport.component';
import { AddadminComponent } from './component/admin/addadmin/addadmin.component';
import { CheckInComponent } from './component/car/check-in/check-in.component';
import { CheckOutComponent } from './component/car/check-out/check-out.component';
import { UpdateCarAvailabilityComponent } from './component/car/update-car-availability/update-car-availability.component';
import { GetCustomerIdentityComponent } from './component/customerIdentity/get-customer-identity/get-customer-identity.component';
import { CarMaintenanceReportComponent } from './component/car/car-maintenance-report/car-maintenance-report.component';

const routes: Routes = [
  

  //mainpage 

  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'customerdashboard' , component:CustomerDashboardComponent},
  {path:'admindashboard',component:AdminDashboardComponent},
  {path:'agentdashboard',component:AgentDashboardComponent},


  //customer dashboard
  
  {path:'updatecustomerdetails',component:UpdatecustomerComponent},
  {path:'customerfeedback',component:CustomerFeedbackComponent},
  {path:'uploadcustomeridentity',component:UploadCustomerIdentityComponent},
  {path:'deletecustomeridentity',component:DeleteCustomerIdentityComponent},
  {path:'makepayment',component:MakePaymentandReservationComponent},
  {path:'viewpaymenthistory',component:SearchPaymentsComponent},
  {path:'modifyreservation',component:ModifyReservationComponent},
  {path:'cancelreservation',component:CancelReservationComponent},
  {path:'viewreservationhistory',component:SearchReservationsComponent},
  
  
  //admin dashboard 

  {path:'addcustomer',component:AddcustomerComponent},
  //{path:'deletecustomer/:customerId',component:DeletecustomerComponent},
  {path:'deletecustomer',component:DeletecustomerComponent},
  {path:'searchallcustomers',component:SearchcustomerComponent},
 // {path:'searchcustomerbyid/:customerId',component:SearchcustomerComponent},
 {path:'searchcustomer',component:SearchcustomerComponent},
  {path:'updatecustomer',component:UpdatecustomerComponent},

  {path:'addcar',component:AddCarComponent},
  {path:'deletecar',component:DeleteCarComponent},
  {path:'searchcar',component:SearchCarComponent},
  {path:'searchallcars',component:SearchCarComponent},
  {path:'updatecar',component:UpdateCarComponent},
  {path:'discountoncarbymake',component:UpdateCarComponent},
  {path:'updatecarprice',component:UpdateCarComponent},
  

  {path:'addagent',component:AddAgentComponent},
  {path:'deleteagent',component:DeleteAgentComponent},
  {path:'updateagent',component:UpdateAgentComponent},
  {path:'searchagent',component:SearchAgentComponent},
  {path:'searchallagents',component:SearchAgentComponent},

  {path:'viewallreservations',component:SearchReservationsComponent},
  {path:'reservationsofcustomer',component:SearchReservationsComponent},
  {path:'viewallpayments',component:SearchPaymentsComponent},
  {path:'payemntsofcustomer',component:SearchPaymentsComponent},
  {path:'adminfeedback',component:AdminFeedbackComponent},
  {path:'viewallfeedbacks',component:SearchfeedbackComponent},
  {path:'revenuebetweendates',component:RevenuereportComponent},
  {path:'revenuebycustomer',component:RevenuereportComponent},
  {path:'totalrevenue',component:RevenuereportComponent},
  
  {path:'registersubadmin',component:AddadminComponent},

  //common for both customer and admin
  {path:'getavailablecars',component:SearchCarComponent},
  {path:'carbylocation',component:SearchCarComponent},
  {path:'carbypassengercapacity',component:SearchCarComponent},
  {path:'carbymake',component:SearchCarComponent},
  {path:'carbyspecification',component:SearchCarComponent},
  {path:'searchcarsbylocationmakemodel',component:SearchCarComponent},
  
// agent dashboard
 //{path:'checkin/:reservationId',component:CheckinComponent},
 {path:'checkin',component:CheckInComponent},
 //{path:'checkout/:reservationId/:carStatus',component:CheckoutComponent},
 {path:'checkout',component:CheckOutComponent},
 //{path:'updatecaravailability/:carStatus/:carId',component:UpdateCarAvailabilityComponent},
 {path:'updatecaravailability',component:UpdateCarAvailabilityComponent},
 {path:'verifyidentity',component:GetCustomerIdentityComponent},
 {path:'carmaintenancereport',component:CarMaintenanceReportComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
