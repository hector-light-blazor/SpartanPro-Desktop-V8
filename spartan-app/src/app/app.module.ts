import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import { OverviewTasksComponent } from './main/overview-tasks/overview-tasks.component';
import { StaffStatusComponent } from './main/staff-status/staff-status.component';
import { HeaderComponent } from './main/header/header.component';
import { MonthlyComponent } from './main/reports/monthly/monthly.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './ui/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    OverviewTasksComponent,
    StaffStatusComponent,
    HeaderComponent,
    MonthlyComponent,
    LogoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
