import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollRegiterComponent } from './enroll-regiter/enroll-regiter.component';
import { EnrollReportComponent } from './enroll-report/enroll-report.component';
// import { InvoiceModule } from './invoice/invoice.module';
// InvoiceModule

const routes: Routes = [
  {path: '', component: EnrollReportComponent},
  {path: 'report', component: EnrollReportComponent},
  {path: 'register', component: EnrollRegiterComponent},
  {path: 'invoice', loadChildren: './invoice/invoice.module#InvoiceModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
