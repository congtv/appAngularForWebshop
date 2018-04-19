import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from './../services/product-category.service';
import {ProductCategory} from './../../models/product-category';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {

  constructor(public service: ProductCategoryService) { }

  ngOnInit() {
    
  }
  getAllData():void{
    var x = this.service.getAll();
  }
}
