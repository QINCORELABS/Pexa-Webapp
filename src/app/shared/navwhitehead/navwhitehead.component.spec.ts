import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavwhiteheadComponent } from './navwhitehead.component';

describe('NavwhiteheadComponent', () => {
  let component: NavwhiteheadComponent;
  let fixture: ComponentFixture<NavwhiteheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavwhiteheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavwhiteheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
