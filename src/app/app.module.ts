// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AdminModule } from './admin/admin.module';
import { ClientModule } from './client/client.module';

// Filter
import { StatusFilter } from './shared/filter/status-filter';
// Service
import { ProductCategoryService } from './shared/services/product-category.service';

// Component
import { AppComponent } from './app.component';
import { ProductCategoryComponent } from './admin/product-category/product-category.component';
import { ProductComponent } from './admin/product/product.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrderComponent } from './admin/order/order.component';
import { MenuComponent } from './admin/menu/menu.component';
import { ProductEditComponent } from './admin/product/product-edit/product-edit.component';
import { ProductAddComponent } from './admin/product/product-add/product-add.component';
import { ProductCategoryAddComponent } from './admin/product-category/product-category-add/product-category-add.component';
import { ProductCategoryEditComponent } from './admin/product-category/product-category-edit/product-category-edit.component';
import { ClientComponent } from './client/client.component';
import { SideBarComponent } from './admin/side-bar/side-bar.component';
import { HeaderComponent } from './admin/header/header.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
