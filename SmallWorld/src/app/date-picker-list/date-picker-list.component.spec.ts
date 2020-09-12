import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerListComponent } from './date-picker-list.component';

describe('DatePickerListComponent', () => {
  let component: DatePickerListComponent;
  let fixture: ComponentFixture<DatePickerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
