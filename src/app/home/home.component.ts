import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  url = 'https://crm-grupo3-azure.azurewebsites.net/';

  youtubers: YoutuberSummary[] = [];

  ngOnInit() {
    this.http.get<YoutuberSummary[]>(this.url + 'youtubers/all/summarized')
      .subscribe(
        res => {
          this.youtubers = res;
        },
      error => alert('Something went wrong')
    );
  }

}
