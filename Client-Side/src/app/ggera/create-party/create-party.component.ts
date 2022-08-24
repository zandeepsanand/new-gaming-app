import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { HeroService } from '../../hero.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-party',
  templateUrl: './create-party.component.html',
  styleUrls: ['./create-party.component.scss']
})
export class CreatePartyComponent implements OnInit {

 
  constructor(
    private router: Router,
    private _heroService: HeroService,
    private activated: ActivatedRoute
  ) { }


  PartyForm: any = new FormGroup({
    'email': new FormControl(''),

  })



  ngOnInit(): void {
  }


  CreateParty(){

  }
}
