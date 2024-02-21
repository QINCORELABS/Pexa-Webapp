import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularServiceCarousalComponent } from './popular-service-carousal.component';

describe('PopularServiceCarousalComponent', () => {
  let component: PopularServiceCarousalComponent;
  let fixture: ComponentFixture<PopularServiceCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularServiceCarousalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularServiceCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
