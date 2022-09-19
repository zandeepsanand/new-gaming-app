import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Observer } from 'rxjs';
import { AnonymousSubject, Subject } from 'rxjs/internal/Subject';
import { io, Socket } from 'socket.io-client';

const CHAT_URL = "http://localhost:8887";

export interface Message {
    source: string;
    content: string;
}


@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: Socket;
  private subject: AnonymousSubject<MessageEvent>;
  public messages: Subject<Message>;

  constructor(private http: HttpClient) {
    this.socket = io(CHAT_URL,{ transports: ['websocket','polling', 'flashback']})
      // this.messages = <Subject<Message>>this.connect(CHAT_URL).pipe(
      //     map(
      //         (response: MessageEvent): Message => {
      //             console.log(response.data);
      //             let data = JSON.parse(response.data)
      //             return data;
      //         }
      //     )
      // );
  }

  public connect(url): AnonymousSubject<MessageEvent> {
      if (!this.subject) {
          this.subject = this.create(url);
          console.log("Successfully connected: " + url);
      }
      return this.subject;
  }

  private create(url): AnonymousSubject<MessageEvent> {
      let ws = new WebSocket(url);
      let observable = new Observable((obs: Observer<MessageEvent>) => {
          ws.onmessage = obs.next.bind(obs);
          ws.onerror = obs.error.bind(obs);
          ws.onclose = obs.complete.bind(obs);
          return ws.close.bind(ws);
      });
      let observer = {
          error: null,
          complete: null,
          next: (data: Object) => {
              console.log('Message sent to websocket: ', data);
              if (ws.readyState === WebSocket.OPEN) {
                  ws.send(JSON.stringify(data));
              }
          }
      };
      return new AnonymousSubject<MessageEvent>(observer, observable);
  }
  joinRoom(room:any){
    return this.http.post<any>(`${CHAT_URL}/joinRoom`,{room})

  }
}
