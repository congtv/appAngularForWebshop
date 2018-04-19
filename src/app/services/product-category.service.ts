import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ProductCategory } from './../../models/product-category';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductCategoryService {

  constructor(private http: HttpClient) { }
  readonly url = `http://localhost:5254/Api/ProductCategory`;
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  public getAll(){
    console.log(this.url);
    console.log(this.headers)
    var x =  this.http.get<string>('assets/config.json');
    return x;
  }
  // productCategory: ProductCategory[];
  // getAll(){
  //   return this.http.get(this.url);
  // }
}
