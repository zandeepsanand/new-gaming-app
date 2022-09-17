import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LobbyService } from 'src/app/services/lobby.service';

@Component({
  selector: 'app-lobby-pro',
  templateUrl: './lobby-pro.component.html',
  styleUrls: ['./lobby-pro.component.scss']
})
export class LobbyProComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute, private _lobby: LobbyService ) { }
  matchId= "";
  lobby: any;
  ngOnInit(): void {
    this.matchId = this.activeRoute.snapshot.paramMap.get("matchId");
    this.getLobby();
  }
  
  getLobby(){
    this._lobby.getLobbyWithMatchId(this.matchId)
      .subscribe(res => {
        this.lobby = res.data
        console.log(this.lobby)
      })
  }

}
