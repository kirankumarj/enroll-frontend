import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollHomeComponent } from './enroll-home/enroll-home.component';
import { EnrollRegiterComponent } from './enroll-regiter/enroll-regiter.component';
import { EnrollReportComponent } from './enroll-report/enroll-report.component';

import { UserIdleModule } from 'angular-user-idle';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EnrollHomeComponent,
    EnrollRegiterComponent,
    EnrollReportComponent,
    HomeComponent
  ],
  imports: [
   //  UserIdleModule.forRoot({idle: 3, timeout: 3, ping: 3}),
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
