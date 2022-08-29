import { Component, OnInit } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { HeroService } from 'src/app/hero.service';
import { Router } from '@angular/router';

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

  user:any;
  subscribers:any;
  pendingSubscribers:any
  approvedSubscribers:any



  constructor(private _heroService:HeroService , private _auth:HeroService,private _hero:HeroService,
    private router:Router) { }

  ngOnInit(): void {
    this.userData()
    this.coachingList()
  }

  coachingList(){
    let email = this._auth.getEmail()
    this._hero.getCoachingList()
      .subscribe((res) => {

        let filterDATA = res.filter((ol) => {
          return ol.pro === email && ol.approve === 'pending';
        })

      let newfilterData = res.filter((ol) => {
        return ol.pro === email && ol.approve === 'true';
      })
        this.pendingSubscribers = filterDATA;
        this.approvedSubscribers = newfilterData
      })
  }


  userData() {
    if(this._heroService.getEmail()){
      let email = this._heroService.getEmail()
      this._heroService.getUserDetail(email).
        subscribe(res => {
          this.user = res         
        })

        this._heroService.getCoach(email).
        subscribe(res => {
          this.subscribers = res    
          console.log(this.subscribers)    
        })

    }
 
  }


  profile(){
    this.router.navigate(['/profile'])
  }
}
