import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarwashingTableComponent } from './carwashing-table.component';

describe('CarwashingTableComponent', () => {
  let component: CarwashingTableComponent;
  let fixture: ComponentFixture<CarwashingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarwashingTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarwashingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
