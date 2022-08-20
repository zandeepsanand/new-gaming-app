import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private _hero: HeroService) { }

  public privateUsers: any;

  ngOnInit(): void {
    this._hero.getAllUsers()
      .subscribe((res) => {
        let filterDATA = res.filter((ol) => {
          return ol.proPlayer === true
        })
        this.privateUsers = filterDATA;
      })

  }

}
