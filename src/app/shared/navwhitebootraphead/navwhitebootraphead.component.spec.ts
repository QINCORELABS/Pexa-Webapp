import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavwhitebootrapheadComponent } from './navwhitebootraphead.component';

describe('NavwhitebootrapheadComponent', () => {
  let component: NavwhitebootrapheadComponent;
  let fixture: ComponentFixture<NavwhitebootrapheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavwhitebootrapheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavwhitebootrapheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
