import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import {
    filter,
    firstValueFrom,
    forkJoin,
    map,
    Observable,
    of,
    tap,
} from "rxjs";
import {
    UserDetailedModel,
    WalletModel,
} from "src/app/common/interface/user.interface";
import { HeroService } from "src/app/hero.service";
import { StoreService } from "src/app/services/store.service";
import { WalletService } from "src/app/services/wallet.service";

@Component({
    selector: "app-account-details",
    templateUrl: "./account-details.component.html",
    styleUrls: ["./account-details.component.scss"],
})
export class AccountDetailsComponent implements OnInit {
    AddMoneyForm: any = new FormGroup({
        amount: new FormControl(""),
        userId: new FormControl(""),
    });
    user$: Observable<UserDetailedModel>;
    data$: Observable<{
        user: UserDetailedModel;
        wallet: WalletModel;
        transactions: any;
    }>;

    constructor(
        private router: Router,
        public hero: HeroService,
        private fb: FormBuilder,
        private walletService: WalletService,
        private store: StoreService
    ) {}

    async ngOnInit(): Promise<void> {
        const user = await firstValueFrom(
            this.store.currentUser$.pipe(filter((e) => !!e))
        );
        const userId = user._id;
        this.data$ = forkJoin({
            user: of(user),
            wallet: this.walletService.getUserWalletData(userId),
            transactions:
                this.walletService.getUserWalletTransactionsData(userId),
        }).pipe(
            tap((e) => {
                console.log("data$", e);
            })
        );
    }

    moneyWithdraw() {}

    async moneyAdd() {
        let data = this.AddMoneyForm.value;
        data.userId = this.store.currentUserId;
        await this.walletService.addMoney(data.amount, data.userId).subscribe();
        // window.location.reload();
        console.log(data.amount);
        this.walletService.addMoneyWithStripe(data.amount).subscribe((res) => {
            window.location.href = res.url;
        });
    }
}
