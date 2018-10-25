import { Component, OnInit } from '@angular/core';
import { FooterInfo } from '../model/FooterInfo';
import { InvoiceServiceService } from '../invoice-service.service';

@Component({
  selector: 'app-footer-info',
  templateUrl: './footer-info.component.html',
  styleUrls: ['./footer-info.component.css']
})
export class FooterInfoComponent implements OnInit {
  showDiv = false;
  selectedFile: File;
  fd = new FormData();

  footerInfo: FooterInfo = {
    fileName: 'none' ,
    path: '',
    removeFooter: false,
    isFooterChanged: false
  };

  constructor(private service: InvoiceServiceService) { }

  ngOnInit() {
    this.footerInfo = this.service.getFooterInfo();
  }

  showHideDiv() {
    this.showDiv = !this.showDiv;
  }

  onFileChanged(event) {
    if (event.target.files[0]) {
      this.selectedFile = <File>event.target.files[0];
      this.fd.append('file', this.selectedFile, this.selectedFile.name);
      this.footerInfo.fileName = event.target.files[0].name;
      this.service.setFooterInfo(this.fd);
      this.footerInfo.isFooterChanged = true;
    }
  }
}
