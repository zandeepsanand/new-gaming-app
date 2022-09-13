import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  // server_address: string = "http://localhost:8887/api"
  server_address: string = environment.apiUrl;

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
  reduceMoney( userId:any, amount:any){
    return this.http.post<any>(`${this.server_address}/wallet/reduce/money`, { userId: userId, amount: amount }); 
  }
}
