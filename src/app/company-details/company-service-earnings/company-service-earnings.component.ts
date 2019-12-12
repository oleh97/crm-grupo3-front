import { Component, OnInit } from '@angular/core';
import {Label, MultiDataSet} from 'ng2-charts';
import {ChartType} from 'chart.js';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-company-service-earnings',
  templateUrl: './company-service-earnings.component.html',
  styleUrls: ['./company-service-earnings.component.css']
})
export class CompanyServiceEarningsComponent implements OnInit {

  url = 'https://crm-grupo3-azure.azurewebsites.net';
  endpoint = '/youtubers/services';


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

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dataLoaded = false;
    this.http.get(this.url + this.endpoint).subscribe(
      res => {
        this.edition = res[this.editionStr];
        this.miniatures = res[this.minuaturesStr];
        this.courses = res[this.coursesStr];
        this.doughnutChartData.push([this.edition, this.miniatures, this.courses]);
        this.dataLoaded = true;
      });
  }

}
