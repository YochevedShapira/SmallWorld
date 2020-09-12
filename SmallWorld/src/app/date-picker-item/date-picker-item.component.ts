import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { bookedDate } from '../models/bookedDate';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker-item',
  templateUrl: './date-picker-item.component.html',
  styleUrls: ['./date-picker-item.component.scss']
})
export class DatePickerItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('date-picker-item-onInit ', this.dateRange);
    this.range = new FormGroup({
      start: new FormControl(this.dateRange.dateStart),
      end: new FormControl(this.dateRange.dateEnd)
    });
  }
  range: FormGroup;
  start: Date;
  end: Date;
  @Input() dateRange: bookedDate;
  @Output() newItemEvent = new EventEmitter<bookedDate>();

  addNewDate(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(this.start, this.end);

    if (this.start != null && this.end != null && this.start !=
      this.dateRange.dateStart && this.end != this.dateRange.dateEnd) {
      this.dateRange.dateStart = this.range.get('start').value;
      this.dateRange.dateEnd = this.range.get('end').value;
      this.newItemEvent.emit(this.dateRange);
    }
  }
}
