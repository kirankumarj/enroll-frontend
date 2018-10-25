import { Component, OnInit } from '@angular/core';
import { Invoice } from '../model/Invoice';
import { InvoiceServiceService } from '../invoice-service.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {
  invoiceColumns = ['Account Type', 'Billable Expenses', 'Booked Date', 'Budgeted Cost',
   'Cost Center', 'Cumulative hours', 'Cumulative total', 'Customer PO', 'Customer PO number', 'Date' ];
  selectedinvoiceColumns: string[];
  // index;
  addSelectedRow;
  removeSelectedRow;
  showDiv = false;
  general = {invoiceLayout: 'Test', isActiveInvoiceLayout: true, isDefaultInvoiceLayout: false };
  myObj;

  // invoiceObj: Invoice;

  constructor(private service: InvoiceServiceService) {

   }

  ngOnInit() {
   //  this.myObj = {size: 10, label: 'Size 10 Object', general : this.general};
   // this.invoiceObj = this.myObj;
   //  this.invoiceObj.columns = this.selectedinvoiceColumns;
   //  console.log(this.invoiceObj);
  //  if (this.service.isEditable) {
      this.selectedinvoiceColumns = this.service.getColumnsInfo();
  //  }
  }

  selectInvoiceColumn(index) {
   this.addSelectedRow = index;
  }

  addField() {
  if (this.selectedinvoiceColumns.indexOf(this.invoiceColumns[this.addSelectedRow]) <  0) {
          if (this.addSelectedRow > -1) {
            this.selectedinvoiceColumns.push(this.invoiceColumns[this.addSelectedRow]);
            // this.invoiceColumns.splice(this.addSelectedRow, 1);
            this.addSelectedRow = -1;
          } else {
            alert('Please select the add options');
        }
    } else {
    alert('Already added the column...!');
    }
  }

  removeField() {
    if (this.removeSelectedRow > -1) {
        // this.invoiceColumns.push(this.selectedinvoiceColumns[this.removeSelectedRow]);
        this.selectedinvoiceColumns.splice(this.removeSelectedRow, 1);
        this.removeSelectedRow = -1;
    } else {
      alert('Please select the remove options');
    }
  }

  selectedinvoiceColumnAction(sIndex) {
    this.removeSelectedRow = sIndex;
  }

  descendingOrder() {
    this.selectedinvoiceColumns.sort();
    this.selectedinvoiceColumns.reverse();
    console.log(this.selectedinvoiceColumns);
  }

  ascendingOrder() {
    this.selectedinvoiceColumns.sort();
    console.log(this.selectedinvoiceColumns);
  }

  moveUp () {
    if (this.removeSelectedRow > 0) {
      const moveVal = this.selectedinvoiceColumns[this.removeSelectedRow];
      this.selectedinvoiceColumns.splice(this.removeSelectedRow, 1);
      this.selectedinvoiceColumns.splice(this.removeSelectedRow - 1 , 0, moveVal);
      this.removeSelectedRow--;
    }
  }

  moveUpShareCode(row, list) {
    if (row > 0) {
      const moveVal = list[row];
      list.splice(row, 1);
      list.splice(row - 1 , 0, moveVal);
      row--;
    }
  }

  moveDown() {
    if (this.removeSelectedRow < this.selectedinvoiceColumns.length - 1) {
      const moveVal = this.selectedinvoiceColumns[this.removeSelectedRow];
      this.selectedinvoiceColumns.splice(this.removeSelectedRow, 1);
      this.selectedinvoiceColumns.splice(this.removeSelectedRow + 1 , 0, moveVal);
      this.removeSelectedRow++;
    }
  }


  saveContent() {

  }


  removeGroupField() {

  }

  saveEnroll() {
   // console.log(this.finalObject);
  }

  showHideDiv() {
    this.showDiv = !this.showDiv;
  }

}
