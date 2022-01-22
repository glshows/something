import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductJacquardWovenComponent } from './product-jacquard-woven.component';

describe('ProductJacquardWovenComponent', () => {
  let component: ProductJacquardWovenComponent;
  let fixture: ComponentFixture<ProductJacquardWovenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductJacquardWovenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductJacquardWovenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
