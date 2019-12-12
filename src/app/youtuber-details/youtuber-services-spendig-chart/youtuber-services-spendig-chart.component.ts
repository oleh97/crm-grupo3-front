import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-youtuber-services-spendig-chart',
  templateUrl: './youtuber-services-spendig-chart.component.html',
  styleUrls: ['./youtuber-services-spendig-chart.component.css']
})
export class YoutuberServicesSpendigChartComponent implements OnInit {

  url = 'https://crm-grupo3-azure.azurewebsites.net/youtuber/';
  endpoint = '/services-spending-graph';


  courses = 1;
  edition = 1;
  miniatures = 1;

  editionStr = 'edition';
  coursesStr = 'courses';
  minuaturesStr = 'minuatures';

  dataLoaded: boolean;

  public doughnutChartLabels: Label[] = ['Edition', 'Minuatures', 'Courses'];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.dataLoaded = false;
    this.http.get(this.url + this.route.snapshot.paramMap.get('id') + this.endpoint).subscribe(
      res => {
          this.edition = res[this.editionStr];
          this.miniatures = res[this.minuaturesStr];
          this.courses = res[this.coursesStr];
          this.doughnutChartData.push([this.edition, this.miniatures, this.courses]);
          this.dataLoaded = true;
        });
  }

}
