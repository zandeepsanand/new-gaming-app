import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { HeroService } from '../../hero.service';
import { tap } from 'rxjs'

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.scss']
})
export class CreatePartyComponent implements OnInit {
  partyForm: FormGroup;

  preferredServers = [
    'Asia Pacific', 'Europe', 'Korea', 'Latin America', 'North America', 'Brazil'
  ]
 
  constructor(
    private router: Router,
    private _heroService: HeroService,
    private activated: ActivatedRoute,
    private fb: FormBuilder
  ) {
    const urlRegex = '((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)'
    this.partyForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      url: ['', [Validators.required, Validators.pattern(urlRegex)]],
      price: ['', [Validators.min(1)]],
      lobbyDescription: [''],
      proUserNickname: [''],
      preferredServer: [''],
      gameFormat: [''],
      game: [localStorage.getItem('selected.game'), [Validators.required]]
    })
    console.log(this.partyControl.url)
  }

  get partyControl() {
    return this.partyForm.controls;
  }



  ngOnInit(): void {
  }


  createParty(){
    if(this.partyForm.valid) {
      this._heroService.createParty(this.partyForm.value).pipe(
        tap(e => console.log(e))
      ).subscribe();
    }
  }
}
