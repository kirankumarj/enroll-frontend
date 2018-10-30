import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { AdditionalInfo } from '../model/AdditionalInfo';
import { Invoice } from '../model/Invoice';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  showDiv = true;
  toAddress;
  fromAddress;

  constructor(private service: InvoiceServiceService) {
   }

  ngOnInit() {
    this.toAddress = this.service.getToAddress();
    this.fromAddress = this.service.getFromAddress();
  }

  showHideDiv() {
    // this.showDiv = !this.showDiv;
  }

  saveFromAddress() {
    this.service.setFromAddress(this.fromAddress);
  }
  saveToAddress() {
    this.service.setToAddress(this.toAddress);
  }

}
