import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {Label} from 'ng2-charts';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-youtuber-age-range-chart',
  templateUrl: './youtuber-age-range-chart.component.html',
  styleUrls: ['./youtuber-age-range-chart.component.css']
})
export class YoutuberAgeRangeChartComponent implements OnInit {

  url = 'https://crm-grupo3-azure.azurewebsites.net/youtuber/';
  endpoint = '/age-range-graph';

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['50+', '30-50', '22-30', '18-22', '15-18', '12-15', '10-12', '5-10'];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(220,20,60,0.3)',
        'rgba(55,182,193,0.3)',
        'rgba(255,62,150,0.3)',
        'rgba(218,112,214,0.3)',
        'rgba(148,0,211,0.3)',
        'rgba(132,112,255,0.3)',
        'rgba(65,105,225,0.3)',
        'rgba(202,225,255,0.3)'],
    },
  ];

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url + this.route.snapshot.paramMap.get('id') + this.endpoint).subscribe(
      data => {
        this.pieChartData.push(data['50+']);
        this.pieChartData.push(data['30-50']);
        this.pieChartData.push(data['22-30']);
        this.pieChartData.push(data['18-22']);
        this.pieChartData.push(data['15-18']);
        this.pieChartData.push(data['12-15']);
        this.pieChartData.push(data['10-12']);
        this.pieChartData.push(data['5-10']);
      }
    );
  }

}
