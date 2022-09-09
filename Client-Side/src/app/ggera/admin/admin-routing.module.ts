import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProRequestComponent } from "./pro-request/pro-request.component";

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
