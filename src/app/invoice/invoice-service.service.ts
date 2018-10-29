import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Invoice } from './model/Invoice';
import { General } from './model/General';
import { Resolve } from '@angular/router';
import { AdditionalInfo } from './model/AdditionalInfo';
import { LogoInfo } from './model/LogoInfo';
import { FooterInfo } from './model/FooterInfo';
import { AdobePDFInfo } from './model/AdobePDFInfo';


@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService implements OnInit, Resolve<any> {

  invoiceObj: Invoice;
  isEditable: boolean;
  selectedId: number;
  isNewInvoice: boolean;

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

  generalInfo: General = {
    invoiceLayout: '',
    isActiveInvoiceLayout: false,
    isDefaultInvoiceLayout: false
  };
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
  logoInfo: LogoInfo = {
    fileName: 'none' ,
    path: '',
    supressCompanyLogo: false,
    removeLogo: false,
    isLogoChanged: false
  };
  footerInfo: FooterInfo = {
    fileName: 'none' ,
    path: '',
    removeFooter: false,
    isFooterChanged: false
  };
  columns = [];
  grouping = [];

  private hostURL = 'http://localhost:3000/invoice';

  constructor(private http: HttpClient) {
    // this.getInvoiceInfoFromServer().subscribe(
    //   (res) => {
    //     this.invoiceObj = res[0];
    //     console.log(this.invoiceObj);
    //   }
    // );
   }

  ngOnInit() {
    // this.http.get('http://localhost:3000/invoice').subscribe((res) => {
    //   console.log(res);
    // });
  }

  setGeneralInfo(generalInfo: General) {
    this.invoiceObj.general = generalInfo;
  }
  getGeneralInfo(): General {
    if (!this.invoiceObj) {
      return new General();
    } else {
      return this.invoiceObj.general;
    }
  }
  getAdditionaInfo(): AdditionalInfo {
    console.log(this.invoiceObj.additionalInfo);
    return this.invoiceObj.additionalInfo;
  }
  setColumnsInfo(columns: string[]) {
    this.invoiceObj.columns = columns;
  }
  getColumnsInfo(): string[] {
    console.log('test', this.invoiceObj);
    return this.invoiceObj.columns;
  }

  setGroupingInfo(groups: string[]) {
    this.invoiceObj.grouping = groups;
  }
  getGroupingInfo() {
    return this.invoiceObj.grouping;
  }

  getAvailableColumns() {

  }
   getInvoiceInfo(): Invoice {
      return this.invoiceObj;
  }

  getInvoiceInfoFromServer(id: string): Observable<any> {
    const idVal = parseInt(id);
    const url = this.hostURL + '/' + idVal;
    return this.http.get(url);
  }

  getData(id) {
    this.getInvoiceInfoFromServer(id).subscribe(
      (res) => {
        this.invoiceObj = res[0];
        console.log(this.invoiceObj);
      }
    );
  }

  newInvoice() {
    this.isNewInvoice = true;
    this.invoiceObj = new Invoice();
    this.invoiceObj.general = this.generalInfo;
    this.invoiceObj.columns = this.columns;
    this.invoiceObj.grouping = this.grouping;
    this.invoiceObj.additionalInfo = this.additionalInfo;
    this.invoiceObj.logoInfo = this.logoInfo;
    this.invoiceObj.footerInfo = this.footerInfo;
    this.invoiceObj.adobePDFInfo = this.adobePDFInfo;
  }

  resolve() {
    // this.getInvoiceInfoFromServer().subscribe(
    //   (res) => {
    //     this.invoiceObj = res[0];
    //     console.log(this.invoiceObj);
    //     return this.invoiceObj;
    //   }
    // );
  }


  saveInvioce(): Observable<any> {
    console.log('req', this.invoiceObj);
    return this.http.put(this.hostURL + '/' + this.selectedId, this.invoiceObj);
  }

  setLogoImageInfo(logoFile: FormData) {
      this.invoiceObj.logoFile = logoFile;
  }

  getLogoImageInfo(): LogoInfo {
    return this.invoiceObj.logoInfo;
  }
  setFooterInfo(footer: FormData) {
    this.invoiceObj.footerFile = footer;
  }

  getFooterInfo(): FooterInfo {
    return this.invoiceObj.footerInfo;
  }


  saveLogoImage(): Observable<any> {
    if (this.invoiceObj.logoFile) {
      return this.http.post('http://localhost:3000/logo-image', this.invoiceObj.logoFile);
    }
  }

  saveFooterImage(): Observable<any> {
    if (this.invoiceObj.footerFile) {
      return this.http.post('http://localhost:3000/logo-image', this.invoiceObj.footerFile);
    }
  }

  deleteInvoice(id): Observable<any> {
    return this.http.delete(this.hostURL + '/' + id);
  }

  getInvoiceData(): Observable<any> {
    return this.http.get('http://localhost:3000/invoice-data');
  }

  saveNewInvoice(): Observable<any> {
    return this.http.post(this.hostURL , this.invoiceObj);
  }

  getAdobePDFInfo(): AdobePDFInfo {
    return this.invoiceObj.adobePDFInfo;
  }

}
