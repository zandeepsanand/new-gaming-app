import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProRequestComponent } from "./pro-request/pro-request.component";
import { ProUserWithdrawRequestComponent } from "./pro-user-withdraw-request/pro-user-withdraw-request.component";
import { SubscriberListComponent } from "./subscriber-list/subscriber-list.component";

const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
    },
    {
        path: "pre-request",
        component: ProRequestComponent,
    },
    {
        path: "withdraw-request",
        component: ProUserWithdrawRequestComponent,
    },
    {
        path: "subscriber-list",
        component: SubscriberListComponent,
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard",
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
