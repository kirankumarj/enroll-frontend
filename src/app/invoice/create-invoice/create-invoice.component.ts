import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { General } from '../model/General';
import { Resolve } from '@angular/router';


@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {

  generalInfo: General = {
    invoiceLayout: '',
    isActiveInvoiceLayout: false,
    isDefaultInvoiceLayout: false
  };

  constructor(private service: InvoiceServiceService) {
  }

  ngOnInit() {
    this.generalInfo = this.service.getGeneralInfo();
  }

  editInvoice() {
  }

}
