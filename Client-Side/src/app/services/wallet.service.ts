import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  // server_address: string = "http://localhost:8887/api"
  server_address: string = '/api';

  constructor(private http: HttpClient) { }


  addMoney(amount: any,userId: any) {
    return this.http.post<any>(`${this.server_address}/wallet/add/money`, { userId: userId, amount: amount });
  }

  addMoneyWithStripe(data:any){
    return this.http.post<any>(`${this.server_address}/stripe/addtowallet`,{data});
  }
  
  getUserWalletData(userId: any) {
    console.log(userId);
    return this.http.post<any>(`${this.server_address}/wallet/details`, { userId: userId });
  }
  getUserWalletTransactionsData(userId: any) {
    console.log(userId);
    return this.http.post<any>(`${this.server_address}/wallet/transactions/details`, { userId: userId });
  }
}
