import { Component, OnInit, Input } from '@angular/core';
import { ProductCategory } from './../../../shared/models/product-category';
import { CommonService } from '../../../shared/services/common.service';
import { ProductCategoryService } from '../../../shared/services/product-category.service';

@Component({
  selector: 'app-product-category-add',
  templateUrl: './product-category-add.component.html',
  styleUrls: ['./product-category-add.component.css']
})
export class ProductCategoryAddComponent implements OnInit {

  constructor(public commonService: CommonService,public service: ProductCategoryService) { }
  productCategory: ProductCategory = new ProductCategory();

  ngOnInit() {
  }

  getSeoTitle(e){
    console.log(this.productCategory.Name.length);
    this.productCategory.Alias = this.commonService.getSeoTitle(this.productCategory.Name);
  }

  addProductCategory(e){
    this.service.addProductCategory(this.productCategory).subscribe(() => console.log('success'));
  }
}
