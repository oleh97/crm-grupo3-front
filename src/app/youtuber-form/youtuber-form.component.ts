import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-youtuber-form',
  templateUrl: './youtuber-form.component.html',
  styleUrls: ['./youtuber-form.component.css']
})
export class YoutuberFormComponent implements OnInit {

  url = 'https://crm-grupo3-azure.azurewebsites.net/youtuber';

  youtuber: Youtuber = {
    channelName: '',
    channelLink: '',
    email: '',
    chosenPaymentMethod: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveYoutuber(): void {
    this.http.post(this.url, this.youtuber).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/');
      },
      error => alert('Something went wrong')
    );
  }
}
