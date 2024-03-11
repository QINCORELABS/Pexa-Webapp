import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferedProducsComponent } from './offered-producs.component';

describe('OfferedProducsComponent', () => {
  let component: OfferedProducsComponent;
  let fixture: ComponentFixture<OfferedProducsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferedProducsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferedProducsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
