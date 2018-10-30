import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';


import { MainComponent } from './main/main.component';
import { ReportComponent } from './report/report.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { InvoiceServiceService } from './invoice-service.service';
import { CreateComponent } from './create/create.component';
import { GroupComponent } from './group/group.component';
import { MultiGroupComponent } from './multi-group/multi-group.component';
import { PdfSettingComponent } from './pdf-setting/pdf-setting.component';
import { LogoInfoComponent } from './logo-info/logo-info.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';

const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'view/:id', component: CreateComponent, resolve: { data : InvoiceServiceService }, children: [

    {path: 'general', component: CreateInvoiceComponent},
    {path: 'invoice-report', component: ReportComponent},
    {path: 'group', component: GroupComponent},
    {path: 'multi-group', component: MultiGroupComponent},
    {path: 'pdf-setting', component: PdfSettingComponent},
    {path: 'additional-info', component: AdditionalInfoComponent},
    {path: 'logo-setting', component: LogoInfoComponent},
    {path: 'footer-setting', component: FooterInfoComponent}
  ]},
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes1)],
//   exports: [RouterModule]
// })

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

