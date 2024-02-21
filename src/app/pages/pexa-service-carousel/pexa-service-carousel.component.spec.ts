import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PexaServiceCarouselComponent } from './pexa-service-carousel.component';

describe('PexaServiceCarouselComponent', () => {
  let component: PexaServiceCarouselComponent;
  let fixture: ComponentFixture<PexaServiceCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PexaServiceCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PexaServiceCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
