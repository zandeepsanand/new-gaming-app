import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HeroService } from 'src/app/hero.service';
import { tap } from 'rxjs';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {



  user:any

  games: any;
  selectedGame: FormControl = new FormControl(localStorage.getItem('selected.game') || '');

  constructor(
    private router: Router,
    private _heroService:HeroService,
    public _auth:HeroService
    
  ) {  }

  ngOnInit(): void {
    this.userData();
    this.getGameData()
  }

  getGameData() {
    this._heroService.getAllGames().pipe(
      tap(e => {
        this.games = e;
      })
    ).subscribe()
    this.selectedGame.valueChanges.pipe(
      tap(e => {
        localStorage.setItem('selected.game', e);
      })
    ).subscribe()
  }

  Wallet() {
    this.router.navigate(['/wallet'])
  }
  Rank() {
    this.router.navigate(['/ranks'])
  }


  Profile() {
    this.router.navigate(['/profile'])
  }

  myOrders() {
    this.router.navigate(['/my-orders'])
  }

  myOrders2() {
    this.router.navigate(['/my-orders2'])
  }

  Stats() {
    this.router.navigate(['/stats'])
  }

  Coaching(){
    this.router.navigate(['/coaching-programme'])

  }

  PreParty(){
    this.router.navigate(['/join-party'])
  }

  PreParty2(){
    this.router.navigate(['/pre-party'])
  }

  referals(){
    this.comingSoon();
    // this.router.navigate(['/referrals'])

  }

  account(){
    this.router.navigate(['/account'])

  }
  Players(){
    this.router.navigate(['/players'])

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
  comingSoon(){
    this.router.navigate(['/coming-soon'])
  }
  support(){
    this.router.navigate(['/support'])
  }
  settings(){
    this.router.navigate(['/settings'])
  }
  subscriptions(){
    this.router.navigate(['/subscriptions'])
  }
}
