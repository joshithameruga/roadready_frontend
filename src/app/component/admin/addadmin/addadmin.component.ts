import { Component } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { Service } from 'src/app/service/service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent {

  constructor(private adminService: Service) { }

  addAdmin(data: Admin) {
    console.log(data);
    this.adminService.insertAdmin(data);

  }
}
