import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from '../../service/jwt-client.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {



  constructor(private router: Router,private jwtService:JwtClientService) {}

  logout(): void {

    this.jwtService.clearStoredToken();
    this.router.navigate(['/login']);
  }
}


