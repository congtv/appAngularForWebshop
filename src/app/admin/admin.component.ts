import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { adminJquery } from '../shared/js/admin';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  initAdminJquery: adminJquery = new adminJquery();
  constructor() { }

  ngOnInit() {
    this.initAdminJquery.Init();
  }
}

