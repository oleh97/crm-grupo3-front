import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {

  contentType: string;
  geographicZone: string;
  ageRange: string;
  visitRange: string;

  url = 'https://crm-grupo3-azure.azurewebsites.net/youtubers/campaign'

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  generateCampaign(): void {
    this.http.get(this.url + '?contentType=' + this.contentType + '&geographicZone=' + this.geographicZone + '&ageRange=' + this.ageRange + '&visitRange=' + this.visitRange).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/');
      },
      error => alert('Something went wrong')
    );
  }

}
