import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcustomerComponent } from './component/customer/addcustomer/addcustomer.component';
import { UpdatecustomerComponent } from './component/customer/updatecustomer/updatecustomer.component';
import { DeletecustomerComponent } from './component/customer/deletecustomer/deletecustomer.component';
import { SearchcustomerComponent } from './component/customer/searchcustomer/searchcustomer.component';

import { DeleteCarComponent } from './component/car/delete-car/delete-car.component';
import { UpdateCarComponent } from './component/car/update-car/update-car.component';
import { SearchCarComponent } from './component/car/search-car/search-car.component';
import { MakePaymentandReservationComponent } from './component/payment/make-paymentand-reservation/make-paymentand-reservation.component';
import { ModifyReservationComponent } from './component/reservation/modify-reservation/modify-reservation.component';
import { CancelReservationComponent } from './component/reservation/cancel-reservation/cancel-reservation.component';
import { SearchPaymentsComponent } from './component/payment/search-payments/search-payments.component';
import { SearchReservationsComponent } from './component/reservation/search-reservations/search-reservations.component';
import { CustomerFeedbackComponent } from './component/feedback/customer-feedback/customer-feedback.component';
import { AdminFeedbackComponent } from './component/feedback/admin-feedback/admin-feedback.component';
import { UploadCustomerIdentityComponent } from './component/customerIdentity/upload-customer-identity/upload-customer-identity.component';
import { DeleteCustomerIdentityComponent } from './component/customerIdentity/delete-customer-identity/delete-customer-identity.component';
import { GetCustomerIdentityComponent } from './component/customerIdentity/get-customer-identity/get-customer-identity.component';
import { AddAgentComponent } from './component/agent/add-agent/add-agent.component';
import { DeleteAgentComponent } from './component/agent/delete-agent/delete-agent.component';
import { SearchAgentComponent } from './component/agent/search-agent/search-agent.component';
import { UpdateAgentComponent } from './component/agent/update-agent/update-agent.component';
import { HomeComponent } from './component/main page/home/home.component';
import { CustomerDashboardComponent } from './component/customer-dashboard/customer-dashboard.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AgentDashboardComponent } from './component/agent-dashboard/agent-dashboard.component';
import { AboutUsComponent } from './component/main page/about-us/about-us.component';
import { ContactUsComponent } from './component/main page/contact-us/contact-us.component';

import { RegistrationComponent } from './component/main page/registration/registration.component';
import { LoginComponent } from './component/main page/login/login.component';
import { SecurityComponent } from './security/security.component';
import { AddCarComponent } from './component/car/add-car/add-car.component';
import { SearchfeedbackComponent } from './component/feedback/searchfeedback/searchfeedback.component';
import { RevenuereportComponent } from './component/admin/revenuereport/revenuereport.component';
import { AddadminComponent } from './component/admin/addadmin/addadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcustomerComponent,
    UpdatecustomerComponent,
    DeletecustomerComponent,
    SearchcustomerComponent,
    AddCarComponent,
    DeleteCarComponent,
    UpdateCarComponent,
    SearchCarComponent,
    MakePaymentandReservationComponent,
    ModifyReservationComponent,
    CancelReservationComponent,
    SearchPaymentsComponent,
    SearchReservationsComponent,
    CustomerFeedbackComponent,
    AdminFeedbackComponent,
    UploadCustomerIdentityComponent,
    DeleteCustomerIdentityComponent,
    GetCustomerIdentityComponent,
    AddAgentComponent,
    DeleteAgentComponent,
    SearchAgentComponent,
    UpdateAgentComponent,
    HomeComponent,
    CustomerDashboardComponent,
    AdminDashboardComponent,
    AgentDashboardComponent,
    AboutUsComponent,
    ContactUsComponent,
    SecurityComponent,
    RegistrationComponent,
    LoginComponent,
    SearchfeedbackComponent,
    RevenuereportComponent,
    AddadminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
