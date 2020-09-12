import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { bookedDate } from '../models/bookedDate';

@Component({
  selector: 'app-date-picker-list',
  templateUrl: './date-picker-list.component.html',
  styleUrls: ['./date-picker-list.component.scss']
})
export class DatePickerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('date-picker-list-onInit', this.bookedDates);

  }
  @Input() bookedDates: bookedDate[];
  @Output() newItemEvent = new EventEmitter<bookedDate[]>();
  addListDate() {
    console.log('output-list-to-template', this.bookedDates);

    this.newItemEvent.emit(this.bookedDates);
  }
  addDate(newDate: bookedDate) {
    console.log('addDate?-- list!!!', newDate);
    console.log(this.bookedDates.length);
    length = this.bookedDates.length - 1;
    this.bookedDates[length] = newDate;
    console.log('after-- ', this.bookedDates);
    this.addListDate();

  }
}
