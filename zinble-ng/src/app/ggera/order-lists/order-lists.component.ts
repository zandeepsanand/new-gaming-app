import { Component, OnInit } from '@angular/core';
import { StreamChat } from 'stream-chat';


@Component({
  selector: 'app-order-lists',
  templateUrl: './order-lists.component.html',
  styleUrls: ['./order-lists.component.scss']
})
export class OrderListsComponent implements OnInit {

  style1:boolean=true

  public modalOpen:boolean=false;

  constructor() { }


  openForm(){
    this.modalOpen=true;
  }

  closeForm(){
    this.modalOpen=false;
  }

  
  ngOnInit(): void {
  }

}
