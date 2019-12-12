import { Component, OnInit } from '@angular/core';
import {Label, SingleDataSet} from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-company-countries-visualization-graph',
  templateUrl: './company-countries-visualization-graph.component.html',
  styleUrls: ['./company-countries-visualization-graph.component.css']
})
export class CompanyCountriesVisualizationGraphComponent implements OnInit {

  url = 'https://crm-grupo3-azure.azurewebsites.net/youtubers/countries-visualization';

  southAmerica = 'southAmerica';
  usa = 'unitedStatesOfAmerica';
  china = 'china';
  japan = 'japan';
  andorra = 'andorra';
  uk = 'unitedKingdom';
  france = 'france';
  spain = 'spain';

  public polarAreaChartLabels: Label[] = ['South America', 'United States of America', 'China', 'Japan', 'Andorra', 'United Kingdom', 'France', 'Spain'];
  public polarAreaChartColors = [
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
  public polarAreaChartData: SingleDataSet = [];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(
      data => {
        console.log(data);
        this.polarAreaChartData.push(data[this.southAmerica]);
        this.polarAreaChartData.push(data[this.usa]);
        this.polarAreaChartData.push(data[this.china]);
        this.polarAreaChartData.push(data[this.japan]);
        this.polarAreaChartData.push(data[this.andorra]);
        this.polarAreaChartData.push(data[this.uk]);
        this.polarAreaChartData.push(data[this.france]);
        this.polarAreaChartData.push(data[this.spain]);
      }
    );
  }

}
