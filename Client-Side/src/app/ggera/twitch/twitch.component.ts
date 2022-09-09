import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare const Twitch: any;


@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss']
})
export class TwitchComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    const partyId = this.activatedRoute.snapshot.paramMap.get("partyId");

    let TwitchID = localStorage.getItem('twitch')
    console.log('Twitch' ,TwitchID)


    var options = {
      width: 854,
      height: 480,
      channel: TwitchID,
      video: "<video ID>",
      collection: "<collection ID>",
    };
    var player = new Twitch.Player("twichTest", options);
    player.setVolume(0.5);
  }

}
