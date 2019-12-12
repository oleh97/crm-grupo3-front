import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

@Component({
  selector: 'app-youtuber-month-earnings',
  templateUrl: './youtuber-month-earnings.component.html',
  styleUrls: ['./youtuber-month-earnings.component.css']
})
export class YoutuberMonthEarningsComponent implements OnInit {

  url = 'https://crm-grupo3-azure.azurewebsites.net/youtuber/';
  endpoint = '/earnings-graph?month=';
  month = 12;

  dataLoaded: boolean;

  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
  ];

  public lineChartLabels: Label[] = [];

  public lineChartLegend = false;

  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartType = 'line';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.dataLoaded = false;
    this.getData();
  }

  getData(): void {
    this.http.get(this.url + this.route.snapshot.paramMap.get('id') + this.endpoint + this.month).subscribe(
      res => {
        this.lineChartData.forEach((dataset, index) => {
          this.lineChartData[index].data = Object.values(res);
        })
        this.lineChartLabels = [];
        Object.keys(res).forEach(elem => this.lineChartLabels.push(elem));
        this.dataLoaded = true;
      }
    );
  }

}
