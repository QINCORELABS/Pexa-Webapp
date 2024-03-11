import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookNowAddresComponent } from './book-now-addres.component';

describe('BookNowAddresComponent', () => {
  let component: BookNowAddresComponent;
  let fixture: ComponentFixture<BookNowAddresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookNowAddresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookNowAddresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
