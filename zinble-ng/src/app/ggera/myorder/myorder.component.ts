import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {

  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    datasets: [{
      data: [45, 25, 40, 80],
  }],
  labels: ['June', 'July', 'August', 'September']
  };


  public donutColors=[
    {
      backgroundColor: [
          'rgba(92, 184, 92,1)',
          'rgba(255, 195, 0, 1)',
          'rgba(217, 83, 79,1)',
          'rgba(129, 78, 40, 1)',
          'rgba(129, 199, 111, 1)'
    ]
    }
  ];


  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };


  constructor() { }

  ngOnInit(): void {
  }

}
