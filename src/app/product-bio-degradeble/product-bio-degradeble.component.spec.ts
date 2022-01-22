import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBioDegradebleComponent } from './product-bio-degradeble.component';

describe('ProductBioDegradebleComponent', () => {
  let component: ProductBioDegradebleComponent;
  let fixture: ComponentFixture<ProductBioDegradebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBioDegradebleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBioDegradebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
