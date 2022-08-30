import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { StreamChat } from 'stream-chat';


@Component({
  selector: 'app-order-lists',
  templateUrl: './order-lists.component.html',
  styleUrls: ['./order-lists.component.scss']
})
export class OrderListsComponent implements OnInit {

  style1: boolean = true
  pendingSubscribers: any
  approvedSubscribers: any
  proDetail: any

  public modalOpen: boolean = false;

  constructor(private _auth: HeroService, private _hero: HeroService) { }


  openForm() {
    this.modalOpen = true;
  }

  closeForm() {
    this.modalOpen = false;
  }


  ngOnInit(): void {
    this.coachingList()
    this.getProDetail()
  }
  getProDetail() {
    let email = this._hero.getEmail()

    this._hero.getUserDetail(email)
      .subscribe(res => {
        this.proDetail = res
      })
  }

  coachingList() {
    let email = this._auth.getEmail()
    this._hero.getCoachingList()
      .subscribe((res) => {

        let filterDATA = res.filter((ol) => {
          return ol.pro === email && ol.approve === 'pending';
        })

        let newfilterData = res.filter((ol) => {
          return ol.pro === email && ol.approve === 'true';
        })
        this.pendingSubscribers = filterDATA;
        this.approvedSubscribers = newfilterData
        console.log(this.pendingSubscribers)
      })
  }

}
