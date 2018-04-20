import { Component, OnInit } from '@angular/core';
import { ProductCategoryService } from './../services/product-category.service';
import { ProductCategory } from './../../models/product-category';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  constructor(public service: ProductCategoryService) { }

  listProductCategory: ProductCategory[];
  selectedProductCategory: ProductCategory;
  ngOnInit() {
    this.getAllData();
  }
  getAllData(): void {
    this.service.getAll().subscribe(
      data => {
        this.listProductCategory = data;
        this.selectedProductCategory = this.listProductCategory[0];
      },
      err => console.error(err));
  }
  selectEditPC(productCategory: ProductCategory): void {
    this.selectedProductCategory = productCategory;
  }
}
