import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-pro-requests',
  templateUrl: './pro-requests.component.html',
  styleUrls: ['./pro-requests.component.scss']
})
export class ProRequestsComponent implements OnInit {


  subscribers: any

  constructor(private _auth: HeroService,
    private _hero: HeroService) { }

  ngOnInit(): void {
    let email = this._auth.getEmail()
    this._hero.getCoachingList()
      .subscribe((res) => {
        let filterDATA = res.filter((ol) => {
          return ol.pro === email;
        })
        this.subscribers = filterDATA;
        console.log('listss',this.subscribers)
      })

  }
}
