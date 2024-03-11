import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedproductsComponent } from './offeredproducts.component';

describe('OfferedproductsComponent', () => {
  let component: OfferedproductsComponent;
  let fixture: ComponentFixture<OfferedproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferedproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferedproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
