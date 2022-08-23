import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HeroService } from 'src/app/hero.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {



  user:any

  constructor(
    private router: Router,
    private _heroService:HeroService,
    public _auth:HeroService
    
  ) {  }

  ngOnInit(): void {
    this.userData();
  }

  Wallet() {
    this.router.navigate(['/wallet'])
  }

  Profile() {
    this.router.navigate(['/profile'])
  }

  myOrders() {
    this.router.navigate(['/my-orders'])
  }

  Stats() {
    this.router.navigate(['/stats'])
  }


  PreParty(){
    this.router.navigate(['/join-party'])
  }

  referals(){
    this.router.navigate(['/referrals'])

  }

  account(){
    console.log('account')
    this.router.navigate(['/account'])


  }
  Logout(){
    localStorage.clear()
    this.router.navigate(['/login'])
  }


  userData() {
    if(this._heroService.getEmail()){
      let email = this._heroService.getEmail()
      this._heroService.getUserDetail(email).
        subscribe(res => {
          this.user = res
         
        })
    }
 
  }
}
