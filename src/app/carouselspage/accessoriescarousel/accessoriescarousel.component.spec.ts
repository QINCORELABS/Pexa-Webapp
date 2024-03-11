import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriescarouselComponent } from './accessoriescarousel.component';

describe('AccessoriescarouselComponent', () => {
  let component: AccessoriescarouselComponent;
  let fixture: ComponentFixture<AccessoriescarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoriescarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriescarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
