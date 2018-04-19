// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// Service
import { ProductCategoryService } from './services/product-category.service';

// Component
import { AppComponent } from './app.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderComponent } from './order/order.component';
import { MenuComponent } from './menu/menu.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductCategoryAddComponent } from './product-category/product-category-add/product-category-add.component';
import { ProductCategoryEditComponent } from './product-category/product-category-edit/product-category-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryComponent,
    ProductComponent,
    DashboardComponent,
    OrderComponent,
    MenuComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductCategoryAddComponent,
    ProductCategoryEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ProductCategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
