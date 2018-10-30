import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './invoice-routing.module';
import { MainComponent } from './main/main.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { ReportComponent } from './report/report.component';
import { CreateComponent } from './create/create.component';
import { GroupComponent } from './group/group.component';
import { MultiGroupComponent } from './multi-group/multi-group.component';
import { InvoiceServiceService } from './invoice-service.service';
import { AdditionalInfoComponent } from './additional-info/additional-info.component';
import { LogoInfoComponent } from './logo-info/logo-info.component';
import { FooterInfoComponent } from './footer-info/footer-info.component';
import { PdfSettingComponent } from './pdf-setting/pdf-setting.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    MainComponent,
    CreateInvoiceComponent,
    ReportComponent,
    CreateComponent,
    GroupComponent,
    MultiGroupComponent,
    AdditionalInfoComponent,
    LogoInfoComponent,
    FooterInfoComponent,
    PdfSettingComponent,
    AddressComponent
  ],
  providers: [
    InvoiceServiceService
  ],
  entryComponents: [
    MainComponent,
  ]
})
export class InvoiceModule { }
