import { General } from './General';
import { AdditionalInfo } from './AdditionalInfo';
import { LogoInfo } from './LogoInfo';
import { FooterInfo } from './FooterInfo';
import { AdobePDFInfo } from './AdobePDFInfo';

export class Invoice {
  general: General;
  columns: string[];
  grouping: string[];
  additionalInfo: AdditionalInfo;
  logoInfo: LogoInfo;
  footerInfo: FooterInfo;

  logoFile: FormData;
  footerFile: FormData;
  adobePDFInfo: AdobePDFInfo;
  toAddress: string;
  fromAddress: string;
}
