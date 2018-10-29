import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { General } from '../model/General';
import { Resolve, Router } from '@angular/router';
import { AdditionalInfo } from '../model/AdditionalInfo';


@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  additionalInfo: AdditionalInfo;

  generalInfo: General = {
    invoiceLayout: '',
    isActiveInvoiceLayout: false,
    isDefaultInvoiceLayout: false
  };

  constructor(private service: InvoiceServiceService, private router: Router) {
  }

  ngOnInit() {
    this.generalInfo = this.service.getGeneralInfo();
    if (!this.generalInfo.invoiceLayout) {
      if (!this.service.isNewInvoice) {
        this.router.navigate(['']);
      }
    }
  }

  editInvoice() {
  }

}
