import { Component, OnInit, Input } from '@angular/core';
import { ProductCategory } from './../../../shared/models/product-category';
import { CommonService } from '../../../shared/services/common.service';
import { ProductCategoryService } from '../../../shared/services/product-category.service';

@Component({
  selector: 'app-product-category-edit',
  templateUrl: './product-category-edit.component.html',
  styleUrls: ['./product-category-edit.component.css']
})
export class ProductCategoryEditComponent implements OnInit {

  constructor(public commonService: CommonService,public service: ProductCategoryService) { }
  @Input() productCategory: ProductCategory;
  ngOnInit() {

  }
  saveProductCategory(e){
    this.productCategory.UpdatedDate = new Date().toLocaleString('us-US');
    this.service.updateProductCategory(this.productCategory).subscribe(() => console.log('success'));
  }

  getSeoTitle(e){
    console.log(this.productCategory.Name.length);
    this.productCategory.Alias = this.commonService.getSeoTitle(this.productCategory.Name);
  }

  checkboxClick(e){
    if(e.target.htmlFor =='status'){
      this.productCategory.Status = !this.productCategory.Status;
    }
    else{
      this.productCategory.HomeFlag = !this.productCategory.HomeFlag;
    }
  }
}
