import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { HeroService } from 'src/app/hero.service';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  AddMoneyForm: any = new FormGroup({
    'amount': new FormControl(''),
    'userId': new FormControl(''),
  })
  user:any;
  walletData$:Observable<any>;
  transactionsData:any;

  constructor(private router: Router, private hero: HeroService, private fb: FormBuilder, private walletService: WalletService) { }

  ngOnInit(): void {
    this.userData();
  }

  moneyWithdraw(){
    
  }

  userData() {
    if(this.hero.getEmail()){
      let email = this.hero.getEmail()
      this.hero.getUserDetail(email).
        subscribe(res => {
          this.user = res
          this.getUserWalletData();
        })
    }
  }
  getUserWalletData() {
      let email = this.hero.getEmail()
      this.walletData$ = this.walletService.getUserWalletData(this.user._id).pipe(tap(() => this.getUserWalletTransactionsData()))
  }
  getUserWalletTransactionsData() {
      let email = this.hero.getEmail()
      this.walletService.getUserWalletTransactionsData(this.user._id).
        subscribe(res => {
          this.transactionsData = res
          console.log(this.transactionsData)
        })
  }

  async moneyAdd(){
    let data = this.AddMoneyForm.value;
    data.userId = this.user._id;

    await this.walletService.addMoney(data.amount, data.userId)
      .subscribe();
      // window.location.reload();
    console.log(data.amount);
    this.walletService.addMoneyWithStripe(data.amount)
      .subscribe(res => {
        window.location.href = res.url;    
        })

      
  }

}
