import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { AdditionalInfo } from '../model/AdditionalInfo';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  showDiv = false;
  additionalInfo: AdditionalInfo;

  constructor(private service: InvoiceServiceService) {
    this.additionalInfo = this.service.getAdditionaInfo();
   }

  ngOnInit() {
  }

  showHideDiv() {
    this.showDiv = !this.showDiv;
  }

}
