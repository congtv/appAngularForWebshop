import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryAddComponent } from './product-category-add.component';

describe('ProductCategoryAddComponent', () => {
  let component: ProductCategoryAddComponent;
  let fixture: ComponentFixture<ProductCategoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCategoryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
