import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarShoppeComponent } from './car-shoppe.component';

describe('CarShoppeComponent', () => {
  let component: CarShoppeComponent;
  let fixture: ComponentFixture<CarShoppeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarShoppeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarShoppeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
