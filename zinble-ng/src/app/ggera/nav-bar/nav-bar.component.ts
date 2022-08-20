import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  location: any;
  containerClass: any;

  constructor(
    private router: Router,
    location: Location
  ) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.location = this.router.url;
          if (this.location == '/bosting' || this.location == '/magazine' || this.location == '/tournaments' || this.location == '/streaming') {
            this.containerClass = 'container';
          } else {
            this.containerClass = 'container-fluid';
          }
        }
      });
  }
  ngOnInit(): void {
  }

  Wallet() {
    this.router.navigate(['/wallet'])
  }

  myOrders() {
    this.router.navigate(['/my-orders'])

  }

  Logout(){
    this.router.navigate(['/login'])

  }

}
