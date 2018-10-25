import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';
import { LogoInfo } from '../model/LogoInfo';

@Component({
  selector: 'app-logo-info',
  templateUrl: './logo-info.component.html',
  styleUrls: ['./logo-info.component.css']
})
export class LogoInfoComponent implements OnInit {
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
    // this.logoInfo.path = this.logoInfo.path + '/public' + this.logoInfo.fileName;
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
