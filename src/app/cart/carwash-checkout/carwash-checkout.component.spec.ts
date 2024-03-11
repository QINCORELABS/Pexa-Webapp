import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashCheckoutComponent } from './carwash-checkout.component';

describe('CarwashCheckoutComponent', () => {
  let component: CarwashCheckoutComponent;
  let fixture: ComponentFixture<CarwashCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwashCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarwashCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
