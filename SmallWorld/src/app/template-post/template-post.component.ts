import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SuggestionService } from '../services/suggestion.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Options } from 'ng5-slider';
import { Suggestion } from '../models/Suggestion';
import { User } from '../models/User';
import { ServiceTypeService } from '../services/service-type.service';
import { ServiceTypeMapper } from '../models/ServiceTypeMapper'
import { range } from 'rxjs';
import { HoursRange } from '../models/HoursRange';
import { AgeRange } from '../models/AgeRange';
import { Router } from '@angular/router';
import { bookedDate } from '../models/bookedDate';
@Component({
  selector: 'app-template-post',
  templateUrl: './template-post.component.html',
  styleUrls: ['./template-post.component.scss']
})
export class TemplatePostComponent implements OnInit {
  currentUser: User;

  constructor(private suggestionService: SuggestionService, private serviceTypeService: ServiceTypeService, public router: Router) {

  }

  ngOnInit() {
    console.log('suggestion-template-post: ', this.suggestion);
    this.serviceTypeService.resetList().subscribe((l: ServiceTypeMapper[]) => { this.toppingList = l; });
    if (this.status)
      this.index_status = 1;
    else this.index_status = 0;
    if (this.suggestion != undefined) {
      this.addDisable = false;
      this.form = new FormGroup({
        title: new FormControl(this.suggestion.Title, [Validators.required, Validators.minLength(2)]),
        country: new FormControl(this.suggestion.Country, Validators.required),
        city: new FormControl(this.suggestion.City, Validators.required),
        street: new FormControl(this.suggestion.Street, Validators.required),
        details: new FormControl(this.suggestion.Description ? this.suggestion.Description : ''),
        gender: new FormControl(this.suggestion.Gender ? this.suggestion.Gender : ''),
      });
      if (this.suggestion.RangeAge) {
        this.value_age = this.suggestion.RangeAge.MinAge;
        this.highValue_age = this.suggestion.RangeAge.MaxAge;
      }
      else {
        this.suggestion.RangeAge = new AgeRange;
        this.suggestion.RangeAge.MinAge = 40;
        this.suggestion.RangeAge.MaxAge = 60;
      }
      if (this.suggestion.RangeHours) {
        this.value_hours = this.suggestion.RangeHours.StartHour;
        this.highValue_hours = this.suggestion.RangeHours.MaxHour;
      }
      else {
        this.suggestion.RangeHours = new HoursRange;
        this.suggestion.RangeHours.StartHour = 10;
        this.suggestion.RangeHours.MaxHour = 15
      }
      if (this.suggestion.bookedDates != undefined) {
        if (this.suggestion.bookedDates.length > 0 && this.suggestion.bookedDates.length > 1) {
          this.bookedDatesIsValue = true;
          console.log('booked??? true', this.suggestion.bookedDates.length);
        }
        else if (this.suggestion.bookedDates.length > 0) {
          this.range = new FormGroup(
            {
              start: new FormControl(this.suggestion.bookedDates[0].dateStart),
              end: new FormControl(this.suggestion.bookedDates[0].dateEnd)
            }
          );
        }
      }
      else {
        this.range = new FormGroup({
          start: new FormControl(),
          end: new FormControl()
        });
      }
    }
    else {
      console.log('חצוף!');
      this.bookedDatesIsValue = false
      this.form = new FormGroup({
        title: new FormControl('', [Validators.required, Validators.minLength(2)]),
        country: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required),
        details: new FormControl(''),
        gender: new FormControl(''),
      });
      this.value_age = 40;
      this.highValue_age = 60;
      this.value_hours = 10;
      this.highValue_hours = 15;
      this.range = new FormGroup({
        start: new FormControl(),
        end: new FormControl()
      });
    }
  }
  bookedDatesIsValue: boolean;
  form;
  range: FormGroup;
  addDisable: boolean = true;
  @Input() status: boolean;
  @Input() suggestion: Suggestion;
  icons = ['cloud_upload', 'save']
  text_button = ['Upload', 'Save']
  index_status;
  rangeAge = false;
  rangeHour = false;
  toppings = new FormControl();
  toppingList: ServiceTypeMapper[];
  new_post: Suggestion = new Suggestion();
  value_age: number;
  highValue_age: number;
  options_age: Options = {
    floor: 0,
    ceil: 120
  };
  bookedDates: Array<bookedDate>;
  value_hours: number;
  highValue_hours: number;
  options_hours: Options = {
    floor: 0,
    ceil: 24
  };
  dateRange: bookedDate;

  changeRangeAge() {
    this.rangeAge = !this.rangeAge;
  }
  changeRangeHour() {
    this.rangeHour = !this.rangeHour;
  }
  get details(): any {
    return this.form.get('details');
  } get gender(): any {
    return this.form.get('gender');
  }
  get title(): any {
    return this.form.get('title');
  }
  get street(): any {
    return this.form.get('street');
  }

  get city(): any {
    return this.form.get('city');
  }

  get country(): any {
    return this.form.get('country');
  }

  getErrorMessageTitle() {
    if (this.title.hasError('required')) {
      return 'You must enter a value';
    }
    return this.title.invalid ? 'Not a valid title' : '';
  } getErrorMessageCountry() {
    if (this.country.hasError('required')) {
      return 'You must enter a value';
    }
    return this.country.invalid ? 'Not a valid country' : '';
  }
  getErrorMessageCity() {
    if (this.city.hasError('required')) {
      return 'You must enter a value';
    }
    return this.city.invalid ? 'Not a valid city' : '';
  }
  getErrorMessageStreet() {
    if (this.street.hasError('required')) {
      return 'You must enter a value';
    }
    return this.street.invalid ? 'Not a valid street' : '';
  }
  x = 0;

  addDates(newDates: bookedDate[]) {
    console.log('templatr get dates: ', newDates);
    this.bookedDates = new Array<bookedDate>();
    this.bookedDates = newDates;
  }
  changeDate() {
    if (this.range.get('start').value && this.range.get('end').value)
      this.addDisable = false;
  }
  addNewDate() {
    console.log('add-date-button');

    let dateRange = new bookedDate();
    dateRange.dateStart = this.range.get('start').value;
    dateRange.dateEnd = this.range.get('end').value;
    console.log('addNewDate(): ', dateRange);
    //this.suggestion = new Suggestion();
    //this.suggestion.bookedDates = new Array<bookedDate>();
    if (!this.suggestion) {
      this.suggestion = new Suggestion();
      this.suggestion.bookedDates = [];
    }

    this.suggestion.bookedDates.push(dateRange);
    let newDate = new bookedDate();
    this.suggestion.bookedDates.push(newDate);
    console.log('??', this.suggestion, this.suggestion.bookedDates);

    this.bookedDatesIsValue = true;
    debugger;

  }
  onSubmit() {
    console.log('this.bookedDates ', this.bookedDates, ' onsubmit');
    debugger;
    if (this.form.get('title').value && this.form.get('country').value && this.form.get('city').value && this.form.get('street').value) {
      console.log("not-null");
      // this.new_post.HostId = JSON.parse(localStorage.getItem('currentUser')).UserID;
      this.new_post.Title = this.form.get('title').value;
      this.new_post.Street = this.form.get('street').value;
      this.new_post.City = this.form.get('city').value;
      this.new_post.Country = this.form.get('country').value;
      this.new_post.Description = this.form.get('details').value;
      if (this.range.get('start').value != null) {
        console.log('rande dont! empty', this.range.get('start').value);

        this.dateRange = new bookedDate;
        this.dateRange.dateStart = this.range.get('start').value;
        this.dateRange.dateEnd = this.range.get('end').value;
        this.new_post.bookedDates = new Array<bookedDate>();
        this.new_post.bookedDates.push(this.dateRange);
      }
      else {
        this.new_post.bookedDates = new Array<bookedDate>();
        this.new_post.bookedDates = this.bookedDates;
      }
      this.new_post.RangeAge = new AgeRange;
      this.new_post.RangeAge.MinAge = this.value_age;
      this.new_post.RangeAge.MaxAge = this.highValue_age;

      this.new_post.RangeHours = new HoursRange;
      this.new_post.RangeHours.StartHour = this.value_hours;
      this.new_post.RangeHours.MaxHour = this.highValue_hours;

      this.new_post.Gender = this.form.get('gender').value;
      this.new_post.servicesType = this.toppings.value.map((v: ServiceTypeMapper) => { return v.IdServiceType });
      console.log(this.toppings.value.map((v: ServiceTypeMapper) => { return v.IdServiceType }));

      console.log("new_post--: ", this.new_post)
      debugger;
      if (this.status) {
        this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.new_post.HostId = this.currentUser.UserID;
        this.suggestionService.post(this.new_post).subscribe(x => {
          this.router.navigate(['/home-host']);
        });
      }
      else {
        this.new_post.SuggestionID=this.suggestion.SuggestionID;
        this.suggestionService.put(this.new_post).subscribe(x => {
            this.router.navigate(['/home-host']);
        });
      }
    }
  }

}
