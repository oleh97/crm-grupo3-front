import { Component, OnInit } from '@angular/core';
import {ChartDataSets} from 'chart.js';
import {Color, Label} from 'ng2-charts';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-company-monthly-income-chart',
  templateUrl: './company-monthly-income-chart.component.html',
  styleUrls: ['./company-monthly-income-chart.component.css']
})
export class CompanyMonthlyIncomeChartComponent implements OnInit {

  url = 'https://crm-grupo3-azure.azurewebsites.net/youtubers/company-income';
  endpoint = '/earnings-graph?month=';
  month = 12;

  dataLoaded: boolean;

  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }
  ];

  public lineChartLabels: Label[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dataLoaded = false;
    this.getData();
  }

  getData(): void {
    this.http.get(this.url).subscribe(
      res => {
        this.lineChartData.forEach((dataset, index) => {
          this.lineChartData[index].data = Object.values(res);
        })
        this.dataLoaded = true;
      }
    );
  }

}
