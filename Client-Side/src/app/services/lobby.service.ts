import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  server_address: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  joinLobby(lobby: any, user : any, gamerId: string) {
    return this.http.post<any>(`${this.server_address}/lobby/join/subscriber`, { user: user, lobby: lobby, gamerId: gamerId });
  }

  getProLobbiesWithGamerId(gamerId: any) {
    return this.http.get<any>(`${this.server_address}/lobby/pro/gamer-id/${gamerId}`);
  }
  getLobbyWithMatchId(matchId: any) {
    return this.http.get<any>(`${this.server_address}/lobby/match-id/${matchId}`);
  }
}
