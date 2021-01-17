import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-DefaultAgGridPage',
  templateUrl: './DefaultAgGridPage.component.html',
  styleUrls: ['./DefaultAgGridPage.component.css']
})
export class DefaultAgGridPageComponent implements OnInit {

  /** テーブルのカラム */
  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  /** テーブルのデータ */
  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
