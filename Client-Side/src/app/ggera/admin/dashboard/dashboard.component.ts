import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminDashboardUserStatsModel } from 'src/app/common/interface/admin.interface';
import { AdminService } from 'src/app/common/service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats$: Observable<AdminDashboardUserStatsModel> = null;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.stats$ = this.adminService.getDashboardDetails();
  }

}
