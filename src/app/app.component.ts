import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roadready';

  showNavbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !this.isDashboardRoute(event.url);
      }
    });
  }

  isDashboardRoute(url: string): boolean {
    // Define your dashboard routes here
    const dashboardRoutes = ['/customerdashboard', '/admindashboard', '/agentdashboard'];
    return dashboardRoutes.some(route => url.includes(route));
  }

}