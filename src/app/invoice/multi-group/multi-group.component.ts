import { Component, OnInit } from '@angular/core';
import { InvoiceServiceService } from '../invoice-service.service';

@Component({
  selector: 'app-multi-group',
  templateUrl: './multi-group.component.html',
  styleUrls: ['./multi-group.component.css']
})
export class MultiGroupComponent implements OnInit {

  groupSelectedRow = [];
  removeGroupSelectedRow;

  showDiv = false;

  invoiceAvailableGroupingEle = ['Account Type', 'Billable Expenses', 'Booked Date', 'Budgeted Cost',
   'Cost Center', 'Cumulative hours', 'Cumulative total', 'Customer PO', 'Customer PO number', 'Date' ];
  selectedInvoiceGroupingElet = [];

  constructor(private service: InvoiceServiceService) { }

  ngOnInit() {
    this.selectedInvoiceGroupingElet = this.service.getGroupingInfo();
  }


  moveUpShareCode(row, list) {
    if (row > 0) {
      const moveVal = list[row];
      list.splice(row, 1);
      list.splice(row - 1 , 0, moveVal);
      row--;
    }
  }

  moveGroupUp() {
    if (this.removeGroupSelectedRow > 0) {
      const moveVal = this.selectedInvoiceGroupingElet[this.removeGroupSelectedRow];
      this.selectedInvoiceGroupingElet.splice(this.removeGroupSelectedRow, 1);
      this.selectedInvoiceGroupingElet.splice(this.removeGroupSelectedRow - 1 , 0, moveVal);
      this.removeGroupSelectedRow--;
    }
  }

  moveGroupDown() {
    if (this.removeGroupSelectedRow < this.selectedInvoiceGroupingElet.length - 1) {
      const moveVal = this.selectedInvoiceGroupingElet[this.removeGroupSelectedRow];
      this.selectedInvoiceGroupingElet.splice(this.removeGroupSelectedRow, 1);
      this.selectedInvoiceGroupingElet.splice(this.removeGroupSelectedRow + 1 , 0, moveVal);
      this.removeGroupSelectedRow++;
    }
  }


  selectedGroupListAc(index) {
    const pos = this.groupSelectedRow.indexOf(index);
    if ( pos === -1) {
      this.groupSelectedRow.push(index);
    } else {
      this.groupSelectedRow.splice(pos, 1);
    }
  }

  deselectedGroupListAc(index) {
    this.removeGroupSelectedRow = index;
  }

  saveContent() {

  }

  checkIndexMatched(i): boolean {
    return this.groupSelectedRow.indexOf(i) > -1 ? true : false;
  }

  addGroupField() {
      if ( this.groupSelectedRow.length > 0 ) {
      this.groupSelectedRow.forEach(i => {
        this.selectedInvoiceGroupingElet.push(this.invoiceAvailableGroupingEle[i]);
      });
      this.groupSelectedRow.sort(function(a, b) { return b - a; });
      this.groupSelectedRow.forEach(i => {
        this.invoiceAvailableGroupingEle.splice(i, 1);
      });

      this.groupSelectedRow = [];
    } else {
      alert('Please select the multiple group options');
    }
  }

  removeGroupField() {

  }

  saveEnroll() {
  }

  showHideDiv() {
    this.showDiv = !this.showDiv;
  }


}
