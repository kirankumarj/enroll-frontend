import { Component, OnInit } from '@angular/core';
import { EnrollObject } from '../model/EnrollObject';

@Component({
  selector: 'app-enroll-regiter',
  templateUrl: './enroll-regiter.component.html',
  styleUrls: ['./enroll-regiter.component.css']
})
export class EnrollRegiterComponent implements OnInit {

  preferenceOriginalList = ['Emp No', 'Emp Name', 'Department', 'Designation', 'Salary' ];
  selectedPreferenceList = [];
  // index;
  addSelectedRow;
  removeSelectedRow;

  finalObject: EnrollObject;

  groupSelectedRow = [];
  removeGroupSelectedRow;

  originalGroupList = ['Emp No', 'Emp Name', 'Department', 'Designation', 'Salary' ];
  selectedGroupList = [];

  constructor() { }

  ngOnInit() {
  }

  selectedPreference(index) {
   this.addSelectedRow = index;
  }

  addField() {
    if (this.addSelectedRow > -1) {
        this.selectedPreferenceList.push(this.preferenceOriginalList[this.addSelectedRow]);
        this.preferenceOriginalList.splice(this.addSelectedRow, 1);
        this.addSelectedRow = -1;
    } else {
      alert('Please select the add options');
    }
  }

  removeField() {
    if (this.removeSelectedRow > -1) {
        this.preferenceOriginalList.push(this.selectedPreferenceList[this.removeSelectedRow]);
        this.selectedPreferenceList.splice(this.removeSelectedRow, 1);
        this.removeSelectedRow = -1;
    } else {
      alert('Please select the remove options');
    }
  }

  selectedGroupListAction(sIndex) {
    this.removeSelectedRow = sIndex;
  }

  descendingOrder() {
    this.selectedPreferenceList.sort();
    this.selectedPreferenceList.reverse();
    console.log(this.selectedPreferenceList);
  }

  ascendingOrder() {
    this.selectedPreferenceList.sort();
    console.log(this.selectedPreferenceList);
  }

  moveUp () {
    if (this.removeSelectedRow > 0) {
      const moveVal = this.selectedPreferenceList[this.removeSelectedRow];
      this.selectedPreferenceList.splice(this.removeSelectedRow, 1);
      this.selectedPreferenceList.splice(this.removeSelectedRow - 1 , 0, moveVal);
      this.removeSelectedRow--;
    }
    // this.moveUpShareCode(this.removeSelectedRow, this.selectedPreferenceList).bind(this);
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
      const moveVal = this.selectedGroupList[this.removeGroupSelectedRow];
      this.selectedGroupList.splice(this.removeGroupSelectedRow, 1);
      this.selectedGroupList.splice(this.removeGroupSelectedRow - 1 , 0, moveVal);
      this.removeGroupSelectedRow--;
    }
    // this.moveUpShareCode(this.removeGroupSelectedRow, this.selectedGroupList);
  }

  moveGroupDown() {
    if (this.removeGroupSelectedRow < this.selectedGroupList.length - 1) {
      const moveVal = this.selectedGroupList[this.removeGroupSelectedRow];
      this.selectedGroupList.splice(this.removeGroupSelectedRow, 1);
      this.selectedGroupList.splice(this.removeGroupSelectedRow + 1 , 0, moveVal);
      this.removeGroupSelectedRow++;
    }
  }

  moveDown() {
    if (this.removeSelectedRow < this.selectedPreferenceList.length - 1) {
      const moveVal = this.selectedPreferenceList[this.removeSelectedRow];
      this.selectedPreferenceList.splice(this.removeSelectedRow, 1);
      this.selectedPreferenceList.splice(this.removeSelectedRow + 1 , 0, moveVal);
      this.removeSelectedRow++;
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
        this.selectedGroupList.push(this.originalGroupList[i]);
      });
      this.groupSelectedRow.sort(function(a, b) { return b - a; });
      this.groupSelectedRow.forEach(i => {
        this.originalGroupList.splice(i, 1);
      });

      this.groupSelectedRow = [];
    } else {
      alert('Please select the multiple group options');
    }
  }

  removeGroupField() {

  }

  saveEnroll() {
    console.log(this.finalObject);
  }

}
