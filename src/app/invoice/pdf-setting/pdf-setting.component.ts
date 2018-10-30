import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { LogoInfo } from '../model/LogoInfo';
import { AdobePDFInfo } from '../model/AdobePDFInfo';

@Component({
  selector: 'app-pdf-setting',
  templateUrl: './pdf-setting.component.html',
  styleUrls: ['./pdf-setting.component.css']
})
export class PdfSettingComponent implements OnInit {
  showDiv = true;
  selectedFile: File;
  fd = new FormData();

  adobePDFInfo: AdobePDFInfo = {
    pageOrientation: '',
    expandPageWidthFitinvoice: false,
    topMarginValue: 0,
    topMarginTo: '',
    bottomMarginValue: 0,
    bottomMarginTo: '',
    fontSize: 0,
    font: '',
    invoiceTitle: '',
    isPrintHeaderDoubleWindow: false,
    isPrintHeaderE65Window: false,
    isPrintHeaderDLWindow: false,
    isPrintHeaderC4Window: false,
    isIncludeShipToAddressPDFInvoice: false,
    isRepeatMultiPageInvoices: false,
    remitToAddress:  '',
  };

  constructor(private service: InvoiceServiceService) { }

  ngOnInit() {
    this.adobePDFInfo = this.service.getAdobePDFInfo();
  }

  showHideDiv() {
    // this.showDiv = !this.showDiv;
  }

  // onFileChanged(event) {
  //   if (event.target.files[0]) {
  //     this.selectedFile = <File>event.target.files[0];
  //     this.fd.append('file', this.selectedFile, this.selectedFile.name);
  //     this.logoInfo.fileName = event.target.files[0].name;
  //     this.service.setLogoImageInfo(this.fd);
  //     this.logoInfo.isLogoChanged = true;
  //   }
  // }

}
