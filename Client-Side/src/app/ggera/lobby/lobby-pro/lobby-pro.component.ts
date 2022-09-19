import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { LobbyService } from 'src/app/services/lobby.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lobby-pro',
  templateUrl: './lobby-pro.component.html',
  styleUrls: ['./lobby-pro.component.scss']
})
export class LobbyProComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute, 
    private _lobby: LobbyService,
    private _hero: HeroService,
    private fb: FormBuilder,
    private router: Router,
    private websocketService: WebsocketService
    ) {
     }

  matchId= "";
  lobby: any;
  users: any;
  user: any;

  title = 'socketrv';
  content = '';
  received = [];
  sent = [];

  DescForm: any = new FormGroup({
    'matchId': new FormControl(''),
    'desc': new FormControl(''),
    'link': new FormControl(''),
  })

  ngOnInit(): void {
    this.matchId = this.activeRoute.snapshot.paramMap.get("matchId");
    this.getLobby();
    this.getAllUsers();
    this.userData()
    // this.websocketService.joinRoom(this.matchId)
  }
  
  getLobby(){
    this._lobby.getLobbyWithMatchId(this.matchId)
      .subscribe(res => {
        this.lobby = res.data
        console.log(this.lobby)
        this.DescForm = this.fb.group({
          'desc': this.lobby.lobbyDescription,
          'link': this.lobby.invite_link,
          'matchId': this.lobby.matchId
        })
      })
  }
  getAllUsers(){
    console.log("hii");
    this._hero.getAllUsers()
    .subscribe(res => {
      this.users = res.data
      console.log(this.users)
    })
  }

  userData() {
    if (this._hero.getEmail()) {
      let email = this._hero.getEmail()
      this._hero.getUserDetail(email).
        subscribe(res => {
          this.user = res
        })
    }
  }
  editDesc(){
    this._lobby.editDescAndLink(this.DescForm.value)
      .subscribe(res => {
        // this.lobby = res.data
        console.log(res.data)
        Swal.fire({
          icon: 'success',
          title: 'Updated successfully',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          window.location.reload();

        })
      })
  }

  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  sendMsg() {
    let message = {
      source: '',
      content: ''
    };
    message.source = 'localhost';
    message.content = this.content;

    this.sent.push(message);
    this.websocketService.messages.next(message);
  }
}
