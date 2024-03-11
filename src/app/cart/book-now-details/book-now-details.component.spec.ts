import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowDetailsComponent } from './book-now-details.component';

describe('BookNowDetailsComponent', () => {
  let component: BookNowDetailsComponent;
  let fixture: ComponentFixture<BookNowDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNowDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
