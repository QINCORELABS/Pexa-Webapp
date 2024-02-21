import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorStepCarWashComponent } from './door-step-car-wash.component';

describe('DoorStepCarWashComponent', () => {
  let component: DoorStepCarWashComponent;
  let fixture: ComponentFixture<DoorStepCarWashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoorStepCarWashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoorStepCarWashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
