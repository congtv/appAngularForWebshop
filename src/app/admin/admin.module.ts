import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SideBarComponent } from './../admin/side-bar/side-bar.component';
import { HeaderComponent } from './../admin/header/header.component';
import { AdminComponent } from './../admin/admin.component';
import { DashboardComponent } from './../admin/dashboard/dashboard.component';
import { OrderComponent } from './../admin/order/order.component';
import { MenuComponent } from './../admin/menu/menu.component';
import { ProductEditComponent } from './../admin/product/product-edit/product-edit.component';
import { ProductAddComponent } from './../admin/product/product-add/product-add.component';
import { ProductCategoryAddComponent } from './../admin/product-category/product-category-add/product-category-add.component';
import { ProductCategoryEditComponent } from './../admin/product-category/product-category-edit/product-category-edit.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductComponent } from './product/product.component';
import { StatusFilter } from '../shared/filter/status-filter';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { ProductCategoryService } from '../shared/services/product-category.service';
import { CommonService } from '../shared/services/common.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [
    AdminComponent,
    ProductCategoryComponent,
    ProductComponent,
    DashboardComponent,
    OrderComponent,
    MenuComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductCategoryAddComponent,
    ProductCategoryEditComponent,
    SideBarComponent,
    HeaderComponent,
    StatusFilter,

  ],
  providers: [
    CommonService,
    ProductCategoryService
  ]
})
export class AdminModule { }
