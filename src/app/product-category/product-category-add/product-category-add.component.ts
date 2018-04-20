import { Component, OnInit, Input } from '@angular/core';
import { ProductCategory } from './../../../models/product-category';
@Component({
  selector: 'app-product-category-add',
  templateUrl: './product-category-add.component.html',
  styleUrls: ['./product-category-add.component.css']
})
export class ProductCategoryAddComponent implements OnInit {

  constructor() { }
  productCategory: ProductCategory = new ProductCategory();
  ngOnInit() {
  }
}
