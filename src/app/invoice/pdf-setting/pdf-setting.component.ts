import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { LogoInfo } from '../model/LogoInfo';

@Component({
  selector: 'app-pdf-setting',
  templateUrl: './pdf-setting.component.html',
  styleUrls: ['./pdf-setting.component.css']
})
export class PdfSettingComponent implements OnInit {
  showDiv = false;
  selectedFile: File;
  fd = new FormData();

  logoInfo: LogoInfo = {
    fileName: 'none' ,
    path: '',
    supressCompanyLogo: false,
    removeLogo: false,
    isLogoChanged: false
  };

  constructor(private service: InvoiceServiceService) { }

  ngOnInit() {
    this.logoInfo = this.service.getLogoImageInfo();
  }

  showHideDiv() {
    this.showDiv = !this.showDiv;
  }

  onFileChanged(event) {
    if (event.target.files[0]) {
      this.selectedFile = <File>event.target.files[0];
      this.fd.append('file', this.selectedFile, this.selectedFile.name);
      this.logoInfo.fileName = event.target.files[0].name;
      this.service.setLogoImageInfo(this.fd);
      this.logoInfo.isLogoChanged = true;
    }
  }

}
