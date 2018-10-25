import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Invoice } from './model/Invoice';
import { General } from './model/General';
import { Resolve } from '@angular/router';
import { AdditionalInfo } from './model/AdditionalInfo';
import { LogoInfo } from './model/LogoInfo';
import { FooterInfo } from './model/FooterInfo';


@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService implements OnInit, Resolve<any> {

  invoiceObj: Invoice;
  isEditable: boolean;

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
    return this.invoiceObj.general;
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

  getInvoiceInfoFromServer(): Observable<any> {
    return this.http.get(this.hostURL);
  }

  getData() {
    this.getInvoiceInfoFromServer().subscribe(
      (res) => {
        this.invoiceObj = res[0];
        console.log(this.invoiceObj);
      }
    );
  }

  resolve() {
    this.getInvoiceInfoFromServer().subscribe(
      (res) => {
        this.invoiceObj = res[0];
        console.log(this.invoiceObj);
        return this.invoiceObj;
      }
    );
  }


  saveInvioce(): Observable<any> {
    console.log('req', this.invoiceObj);
    return this.http.put(this.hostURL, this.invoiceObj);
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

}
