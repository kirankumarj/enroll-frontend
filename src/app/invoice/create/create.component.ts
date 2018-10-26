import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service: InvoiceServiceService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.params.subscribe( params => {
      console.log(params.id);
      if (params.id === 'new') {
        this.service.newInvoice();
      } else {
        this.service.getData(params.id);
      }
    });
   }

  ngOnInit() {
    // console.log(this.route.param.get('id'));
  }

  saveInvoice() {
    if (this.service.isNewInvoice) {
      this.service.saveNewInvoice().subscribe((res) => {
        console.log(res);
        alert('Saved New Invoice :' + res.res);
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
        this.router.navigate(['/invoice']);
      });
      this.service.isNewInvoice = false;
    } else {
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

}
