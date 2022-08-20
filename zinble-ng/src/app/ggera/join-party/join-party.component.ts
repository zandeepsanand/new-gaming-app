import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-join-party',
  templateUrl: './join-party.component.html',
  styleUrls: ['./join-party.component.scss']
})
export class JoinPartyComponent implements OnInit {

  constructor(public _auth: HeroService,
    private _router: Router) { }

  ngOnInit(): void {
  }
  newParty() {
    this._router.navigate(['create-party'])
  }
}
