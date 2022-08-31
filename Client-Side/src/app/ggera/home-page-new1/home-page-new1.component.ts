import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-home-page-new1',
  templateUrl: './home-page-new1.component.html',
  styleUrls: ['./home-page-new1.component.scss']
})
export class HomePageNew1Component implements OnInit {

  constructor(private _heroService :HeroService, private router :Router) { }

  paymentHandler: any = null;

  success: boolean = false

  failure: boolean = false


  ngOnInit(): void {

    this.invokeStripe()
  }

  
  makePayment(amount: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LT4FJSBGyD7UYjV7Uzl35ECOGv6TAtzwwYlAokpfqWpLNoXEZq1Ov3RoijNAxrN5fRhYqxzedauoF7tyFlbgr9q002zPPPLTa',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        paymentstripe(stripeToken);
      },
    });

    const paymentstripe = (stripeToken: any) => {
      this._heroService.makePayment(stripeToken).subscribe((data: any) => {
        if (data.data === "success") {
          this.success = true
          let email= this._heroService.getEmail()
          this._heroService.addMoney(email,amount)
          .subscribe(res=>{
            this.router.navigate(['/dashboard'])
          })
        }
        else {
          this.failure = true
        }
      });
    };

    paymentHandler.open({
      name: 'ggEra',
      description: 'Payment',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LT4FJSBGyD7UYjV7Uzl35ECOGv6TAtzwwYlAokpfqWpLNoXEZq1Ov3RoijNAxrN5fRhYqxzedauoF7tyFlbgr9q002zPPPLTa',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }

}
