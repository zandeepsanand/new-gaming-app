import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProRequestComponent } from "./pro-request/pro-request.component";
import { AdminService } from "src/app/common/service/admin.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "src/app/common/interceptor/jwt.interceptor";
import { NgChartsModule } from 'ng2-charts';
import { ProUserWithdrawRequestComponent } from './pro-user-withdraw-request/pro-user-withdraw-request.component';
import { SubscriberListComponent } from './subscriber-list/subscriber-list.component';
import { ProListComponent } from './pro-list/pro-list.component';
import { EarningsComponent } from './earnings/earnings.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

@NgModule({
    declarations: [DashboardComponent, ProRequestComponent, ProUserWithdrawRequestComponent, SubscriberListComponent, ProListComponent, EarningsComponent, ViewprofileComponent],
    imports: [
        CommonModule,
        NgChartsModule,
        HttpClientModule,
        AdminRoutingModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        AdminService,
    ],
})
export class AdminModule {}
