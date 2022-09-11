import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Observable, tap } from 'rxjs';
import { AdminDashboardUserStatsModel } from 'src/app/common/interface/admin.interface';
import { AdminService } from 'src/app/common/service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats$: Observable<AdminDashboardUserStatsModel> = null;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      // datalabels: {
      //   formatter: (value, ctx) => {
      //     if (ctx.chart.data.labels) {
      //       return ctx.chart.data.labels[ctx.dataIndex];
      //     }
      //   },
      // },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [ 'Subscribers', 'Pro Users', 'Pro Requests' ],
    datasets: [ {
      data: [ 0, 0, 0 ]
    } ]
  };
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [  ];
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.stats$ = this.adminService.getDashboardDetails().pipe(tap(e => {
      this.pieChartData.datasets[0] = {data: [e.subscriber, e.proUsers, e.proRequest]}
    }));
  }

}
