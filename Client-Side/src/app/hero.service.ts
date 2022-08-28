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
  // server_address: string = "http://localhost:8887/api"
  server_address: string = '/api';


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

  OTPGo(data: any, email: any) {
    return this.http.post<any>(`${this.server_address}/auth/verifyOTP`, { data, email });
  }

  //! Stripe related 

  makePayment(stripeToken: any) {
    return this.http.post<any>(`${this.server_address}/stripe`, { token: stripeToken });
  }
  addMoney(data:any,amount:number){
    return this.http.put<any>(`${this.server_address}/stripe`, {data,amount});
  }


  //!User related

  reqPro(email: any) {
    return this.http.post<any>(`${this.server_address}/reqPro`, { email: email });
  }



  //! coaching related 

  coach(email: any, pro_id: any) {
    return this.http.post<any>(`${this.server_address}/coach`, { email: email, pro_id: pro_id });

  }

  getCoach(id:any) {
    return this.http.get<any>(`${this.server_address}/proplayer/${id}/coach`);
  }
  coachingGo(data: any, email: any) {
    return this.http.post<any>(`${this.server_address}/proplayer/coaching`, { data: data, email: email });
  }

  getCoachingList() {
    return this.http.get<any>(`${this.server_address}/proplayer/coaching-requests`,);
  }
  getReq() {
    return this.http.get<any>(`${this.server_address}/proplayer/reqPro`);
  }

  //! Party related 
  partyGo(data: any, email: any) {
    return this.http.post<any>(`${this.server_address}/party`, { data: data, email: email });
  }

  getParty() {
    return this.http.get<any>(`${this.server_address}/party`,);
  }

  joinParty(id: any) {
    console.log("id", id)
    return this.http.post<any>(`${this.server_address}/proplayer/joinparty`, { id });
  }



//! Pro related 
  
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


  //! User related 
  getAllUsers() {
    return this.http.get<any>(`${this.server_address}/user/all`);
  }

  getUserById(id:any){
    return this.http.get<any>(`${this.server_address}/user/single/${id}`);
  }
  getUserDetail(data: any) {
    return this.http.post<any>(`${this.server_address}/user`, { data });

  }

  //* Profile 
  updateProfile(profile: any, email: any) {
    return this.http.put<any>(`${this.server_address}/user`, { profile: profile, email: email });
  }

  //! Chat related 

  getchatlist(email: any) {
    return this.http.post<any>(`${this.server_address}/chatLists`, email)

  }



}
