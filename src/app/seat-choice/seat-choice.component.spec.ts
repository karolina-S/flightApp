import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatChoiceComponent } from './seat-choice.component';

describe('SeatChoiceComponent', () => {
  let component: SeatChoiceComponent;
  let fixture: ComponentFixture<SeatChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
