import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from "jwt-decode"


interface MyToken {
  role: string;
  email: string;
  superAdmin: string;

  // whatever else is in the JWT.
}

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  server_address: string = "http://localhost:8887/api"
  // server_address: string = '/api';


  constructor(private http: HttpClient) { }

  //! Token related

  //Admin Role Check
  isPro(): boolean {
    var token = localStorage.getItem('accessToken') || '';
    var user = jwt_decode<MyToken>(token);
    return user.role === 'professional' ? true : false;
  }

  //SuperAdmin Role Check
  isSuperAdmin(): boolean {
    var token = localStorage.getItem('accessToken') || '';
    var user = jwt_decode<MyToken>(token);
    return user.superAdmin === 'super' ? true : false;
  }
  //normal Role Check
  isNormal(): boolean {
    var token = localStorage.getItem('accessToken') || '';
    var user = jwt_decode<MyToken>(token);
    return user.role === 'normal' ? true : false;
  }

  //email Role Check
  getEmail() {
    var token = localStorage.getItem('accessToken') || '';
    var user = jwt_decode<MyToken>(token);
    return user.email;
  }

  //check Presence of Token  
  isLoggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  //retrive Token for token interception
  getToken() {
    return localStorage.getItem('accessToken')
  }


  getUserDetail(data: any) {
    return this.http.post<any>(`${this.server_address}/user`, { data });

  }

  updateProfile(profile: any, email: any) {
    return this.http.put<any>(`${this.server_address}/user`, { profile: profile, email: email });
  }

  //!Signup related

  signupGo(data: any) {
    return this.http.post<any>(`${this.server_address}/auth/signUp`, data);
  }
  discordSign() {
    return this.http.get<any>(`${this.server_address}/auth/discordStart`);
  }

  googleSave(data: any) {
    return this.http.post<any>(`${this.server_address}/auth/googleSave`, data);
  }

  makePayment(stripeToken: any) {
    return this.http.post<any>(`${this.server_address}/stripe`, { token: stripeToken });
  }

  OTPGo(data: any, email: any) {
    return this.http.post<any>(`${this.server_address}/auth/verifyOTP`, { data, email });
  }

  addMoney(data:any,amount:number){
    return this.http.put<any>(`${this.server_address}/stripe`, {data,amount});
  }

  //req pro

  reqPro(email: any) {
    return this.http.post<any>(`${this.server_address}/reqPro`, { email: email });

  }

  coach(email: any, pro_id: any) {
    return this.http.post<any>(`${this.server_address}/proplayer/coach`, { email: email, pro_id: pro_id });

  }

  getCoach() {
    return this.http.get<any>(`${this.server_address}/proplayer/coach`);
  }



  getReq() {
    return this.http.get<any>(`${this.server_address}/proplayer/reqPro`);
  }
  partyGo(data: any, email: any) {
    return this.http.post<any>(`${this.server_address}/proplayer/party`, { data: data, email: email });
  }

  getParty() {
    return this.http.get<any>(`${this.server_address}/proplayer/party`,);
  }

  joinParty(id: any) {
    console.log("id", id)
    return this.http.post<any>(`${this.server_address}/proplayer/joinparty`, { id });
  }

  coachingGo(data: any, email: any) {
    return this.http.post<any>(`${this.server_address}/proplayer/coaching`, { data: data, email: email });
  }

  getCoachingList() {
    return this.http.get<any>(`${this.server_address}/proplayer/coaching`,);
  }
  sendLinkApprove(id: any, pro_id: any) {
    console.log(id)
    return this.http.post<any>(`${this.server_address}/proplayer/sendLink_approve`, { id: id, pro_id: pro_id });
  }

  sendLinkReject(id: any) {
    return this.http.post<any>(`${this.server_address}/proplayer/sendLink_reject`, { id });
  }

  getProId(id: any) {
    return this.http.post<any>(`${this.server_address}/proplayer/pro`, { id });

  }

  getAllUsers() {
    return this.http.get<any>(`${this.server_address}/users`);
  }

  getchatlist(email: any) {
    return this.http.post<any>(`${this.server_address}/chatLists`, email)

  }



}
