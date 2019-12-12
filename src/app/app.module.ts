import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule} from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YoutuberFormComponent } from './youtuber-form/youtuber-form.component';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { YoutuberDetailsComponent } from './youtuber-details/youtuber-details.component';
import { YoutuberAgeRangeChartComponent } from './youtuber-details/youtuber-age-range-chart/youtuber-age-range-chart.component';
import { YoutuberCountriesVisualizationChartComponent } from './youtuber-details/youtuber-countries-visualization-chart/youtuber-countries-visualization-chart.component';
import { YoutuberMonthEarningsComponent } from './youtuber-details/youtuber-month-earnings/youtuber-month-earnings.component';
import { YoutuberServicesSpendigChartComponent } from './youtuber-details/youtuber-services-spendig-chart/youtuber-services-spendig-chart.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyServiceEarningsComponent } from './company-details/company-service-earnings/company-service-earnings.component';
import { CompanyCountriesVisualizationGraphComponent } from './company-details/company-countries-visualization-graph/company-countries-visualization-graph.component';
import { CompanyTopYoutubersChartComponent } from './company-details/company-top-youtubers-chart/company-top-youtubers-chart.component';
import { CompanyMonthlyIncomeChartComponent } from './company-details/company-monthly-income-chart/company-monthly-income-chart.component';
import { MarketingComponent } from './marketing/marketing.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'marketing',
    component: MarketingComponent,
  },
  {
    path: 'youtuber-form',
    component: YoutuberFormComponent,
  },
  {
    path: 'youtuber/:id',
    component: YoutuberDetailsComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    YoutuberFormComponent,
    YoutuberDetailsComponent,
    YoutuberAgeRangeChartComponent,
    YoutuberCountriesVisualizationChartComponent,
    YoutuberMonthEarningsComponent,
    YoutuberServicesSpendigChartComponent,
    CompanyDetailsComponent,
    CompanyServiceEarningsComponent,
    CompanyCountriesVisualizationGraphComponent,
    CompanyTopYoutubersChartComponent,
    CompanyMonthlyIncomeChartComponent,
    MarketingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
