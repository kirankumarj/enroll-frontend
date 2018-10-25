import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service: InvoiceServiceService) { }

  ngOnInit() {
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
