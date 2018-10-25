import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvoiceServiceService } from '../invoice-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  id = 1;
  invoiceList = [
    // {id: 1, name: 'Invoice - 1'},
    // {id: 2, name: 'Invoice - 2'},
    // {id: 3, name: 'Invoice - 3'},
  ];
  constructor(private service: InvoiceServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getInvoiceData().subscribe((res) => {
      this.invoiceList = res;
    });
  }

  viewInvoice() {
    // this.router.navigate(['/heroes']);
    this.router.navigate(['view']);
  }

  storeSelectedInvoiceId(id: number) {
    this.service.selectedId = id;
  }

  deleteInvoice(invoice, i: number) {
    this.service.deleteInvoice(invoice.invoiceid).subscribe((res) => {
      alert(res.response);
      if (res.response === 'Successfully Deleted Invoice') {
        this.invoiceList.splice(i, 1);
      }
    });
  }

  saveInvoice() {
    this.service.saveInvioce().subscribe((res) => {
      console.log(res);
      alert('Saved' + res.res);
      if (res.res === 'SUCCESS') {
          if  (this.service.getLogoImageInfo().isLogoChanged) {
            this.service.saveLogoImage().subscribe( result => {
                alert('Logo Image ' + result.message);
              });
          } else if  (this.service.getFooterInfo().isFooterChanged) {
            this.service.saveFooterImage().subscribe( result => {
                alert('Footer Image ' + result.message);
              });
          }
      }
    });
  }

}
