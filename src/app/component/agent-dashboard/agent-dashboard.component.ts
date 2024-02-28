import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtClientService } from '../../service/jwt-client.service';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent {

  constructor(private router: Router,private jwtService:JwtClientService){}
  logout(): void {

    this.jwtService.clearStoredToken();
    this.router.navigate(['/login']);
  }
  
}
