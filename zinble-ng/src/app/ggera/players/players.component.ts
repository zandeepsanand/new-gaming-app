import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(private _hero: HeroService,
    private route:Router) { }

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

  singlePro(id:any){
    this.route.navigate([`/single-pro`],{ queryParams: { id: id }})
  }
}
