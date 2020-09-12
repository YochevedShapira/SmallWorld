import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerItemComponent } from './date-picker-item.component';

describe('DatePickerItemComponent', () => {
  let component: DatePickerItemComponent;
  let fixture: ComponentFixture<DatePickerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
