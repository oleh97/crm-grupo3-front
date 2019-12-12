import { Component, OnInit } from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import { ChartType, ChartDataSets, ChartOptions } from 'chart.js';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-company-top-youtubers-chart',
  templateUrl: './company-top-youtubers-chart.component.html',
  styleUrls: ['./company-top-youtubers-chart.component.css']
})
export class CompanyTopYoutubersChartComponent implements OnInit {

  url = 'https://crm-grupo3-azure.azurewebsites.net/youtubers/top';

  monetizationArray: number[] = [];
  viewsArray: number[] = [];

  monetization = 'monetization';
  views = 'views';
  channelName = 'channelName';

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartDataViews: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0], label: 'Visitas' }
  ];

  public barChartDataMonetization: ChartDataSets[] = [
    { data: [0, 0, 0, 0, 0], label: 'Monetizacion' }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(
      data => {
        Object.values(data).forEach(elem => {
          this.monetizationArray.push(elem[this.monetization]);
          this.viewsArray.push(elem[this.views]);
          this.barChartLabels.push(elem[this.channelName]);
        });
        this.barChartDataMonetization[0].data = this.monetizationArray;
        this.barChartDataViews[0].data = this.viewsArray;
      }
    );
  }

}
