import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { AdminDashboardUserStatsModel } from "../interface/admin.interface";
import { ApiResponse } from "../interface/api.interface";
import { UserDetailedModel } from "../interface/user.interface";

@Injectable({
    providedIn: "root",
})
export class AdminService {
    host: string = environment.apiUrl;
    constructor(private http: HttpClient) {}

    getDashboardDetails() {
        return this.http
            .get<ApiResponse<AdminDashboardUserStatsModel>>(
                `${this.host}/admin/user-stats`
            )
            .pipe(map((e) => e.data));
    }

    getProRequestUsers() {
        return this.http
            .get<ApiResponse<{ users: UserDetailedModel }>>(
                `${this.host}/admin/pro-request/users`
            )
            .pipe(map((e) => e.data.users));
    }

    activateProRequestUser(id: string) {
        return this.http
            .patch<ApiResponse<string>>(
                `${this.host}/admin/pro-request/user/${id}/activate`,
                {}
            )
            .pipe(map((e) => e.data));
    }
}