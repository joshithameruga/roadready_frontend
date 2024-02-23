import { Component } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-revenuereport',
  templateUrl: './revenuereport.component.html',
  styleUrls: ['./revenuereport.component.css']
})
export class RevenuereportComponent {
  adminSearchList:Admin[] =[];

  constructor(private adminService:Service){}

  getReportById(customerId:number){
    
    console.log(customerId)

      this.adminService.getById(customerId).subscribe((a) => {console.log("report obtained"+a)});
  }

  getAllRevenueReport(){
    
    this.adminService.getAllRevenueReport().subscribe( (reports)=> {this.adminSearchList = reports;console.log("list" + reports);
    
  });
  }
}
