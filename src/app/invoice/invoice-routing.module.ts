import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { MainComponent } from './main/main.component';
import { ReportComponent } from './report/report.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoiceServiceService } from './invoice-service.service';
import { CreateComponent } from './create/create.component';

const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'view/:id', component: CreateComponent, resolve: { data : InvoiceServiceService }, children: [

    {path: 'general', component: CreateInvoiceComponent},
    {path: 'invoice-report', component: ReportComponent},
    {path: 'create-invoice', component: CreateInvoiceComponent}
  ]},
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes1)],
//   exports: [RouterModule]
// })

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

