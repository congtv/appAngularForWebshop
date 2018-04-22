import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ProductCategory } from './../models/product-category';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductCategoryService {

  constructor(private http: HttpClient) { }

  readonly rootUrl = 'http://localhost:5254/';
  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  public getAll(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.rootUrl + 'api/productcategory/getall', { headers: this.headers}).pipe(
      catchError(err => of([]))
    );
  }

  public addProductCategory(productCategory:ProductCategory):Observable<any>{
    return this.http.post(this.rootUrl+'api/productcategory/create',productCategory,{headers:this.headers}).pipe(
      tap(()=> console.log(`Product category had been create`))
      );
  }

  public updateProductCategory(productCategory:ProductCategory):Observable<any>{
    return this.http.put(this.rootUrl+'api/productcategory/update',productCategory,{headers:this.headers}).pipe(
      tap(()=> console.log(`Product category had been update`))
      );
  }
}
