import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatChoiceWorldComponent } from './seat-choice-world.component';

describe('SeatChoiceWorldComponent', () => {
  let component: SeatChoiceWorldComponent;
  let fixture: ComponentFixture<SeatChoiceWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatChoiceWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatChoiceWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
