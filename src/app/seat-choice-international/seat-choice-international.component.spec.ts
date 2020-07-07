import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatChoiceInternationalComponent } from './seat-choice-international.component';

describe('SeatChoiceInternationalComponent', () => {
  let component: SeatChoiceInternationalComponent;
  let fixture: ComponentFixture<SeatChoiceInternationalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SeatChoiceInternationalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatChoiceInternationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
