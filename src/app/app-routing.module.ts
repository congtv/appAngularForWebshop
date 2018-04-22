import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './admin/product/product.component';
import { ProductAddComponent } from './admin/product/product-add/product-add.component';
import { ProductEditComponent } from './admin/product/product-edit/product-edit.component';
import { ProductCategoryComponent } from './admin/product-category/product-category.component';
import { ProductCategoryAddComponent } from './admin/product-category/product-category-add/product-category-add.component';
import { ProductCategoryEditComponent } from './admin/product-category/product-category-edit/product-category-edit.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { OrderComponent } from './admin/order/order.component';
import { MenuComponent } from './admin/menu/menu.component';

import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ClientComponent },
  { path: 'administrator', loadChildren: './admin/admin.module#AdminModule'},
  { path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
