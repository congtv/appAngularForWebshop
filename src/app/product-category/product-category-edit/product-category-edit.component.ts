import { Component, OnInit, Input } from '@angular/core';
import { ProductCategory } from '../../../models/product-category';

@Component({
  selector: 'app-product-category-edit',
  templateUrl: './product-category-edit.component.html',
  styleUrls: ['./product-category-edit.component.css']
})
export class ProductCategoryEditComponent implements OnInit {

  constructor() { }
  @Input() productCategory: ProductCategory;
  ngOnInit() {
  }

}
