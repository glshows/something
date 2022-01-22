import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRecycleFabricComponent } from './product-recycle-fabric.component';

describe('ProductRecycleFabricComponent', () => {
  let component: ProductRecycleFabricComponent;
  let fixture: ComponentFixture<ProductRecycleFabricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRecycleFabricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRecycleFabricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
