import { Component, OnInit } from '@angular/core';
import { AdditionalInfo } from '../model/AdditionalInfo';
import { InvoiceServiceService } from '../invoice-service.service';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {
  showDiv = false;

  additionalInfo: AdditionalInfo = {
    additionalText : '',
    locationOfInvoiceText : '',
    isincludeBalances : false,
    isSupressTerms : false,
    isSupressFormAddress : false,
    isShowDueDateCalculatedFromTerms : false,
    isDisplayNegativeNumbersRedColor : false,
    isSupressCentsWhenPossible : false,
    isUseISOCurrencyCodes : false,
    isBreakdownTakes : false,
    isSuppressProjectName : false,
    formatHours : '',
    isAddAttachmentLinks : false,
    isIncludeAttachmentDownloadPDF : false,
    isSuppressTotalPaymentToDate : false,
    toAddress: '',
    fromAddress: ''
  };

  constructor(private service: InvoiceServiceService) { }

  ngOnInit() {
      this.additionalInfo = this.service.getAdditionaInfo();
  }
  showHideDiv() {
    this.showDiv = !this.showDiv;
  }

}
