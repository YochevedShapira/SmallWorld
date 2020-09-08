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
@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.scss'],
  providers: [ServiceTypeService]

})
export class UploadPostComponent implements OnInit {
  @Input() status: boolean;
  constructor(private suggestionService: SuggestionService, private serviceTypeService: ServiceTypeService) { }
  ngOnInit() {
    console.log();
    this.serviceTypeService.resetList().subscribe((l: ServiceTypeMapper[]) => { this.toppingList = l; });
    if (this.status)
      this.index_status = 1;
    else this.index_status = 0;
  }
  icons = ['cloud_upload', 'save']
  text_button = ['Upload', 'Save']
  index_status;
  rangeAge = false;
  rangeHour = false;
  toppings = new FormControl();
  toppingList: ServiceTypeMapper[];
  new_post: Suggestion = new Suggestion;
  value_age: number = 40;
  highValue_age: number = 60;
  options_age: Options = {
    floor: 0,
    ceil: 120
  };

  value_hours: number = 10;
  highValue_hours: number = 15;
  options_hours: Options = {
    floor: 0,
    ceil: 24
  };

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    country: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    street: new FormControl('', Validators.required),
    details: new FormControl('',),
    gender: new FormControl('',),

  });
  changeRangeAge() {
    this.rangeAge = !this.rangeAge;
  } changeRangeHour() {
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

  onSubmit() {

    if (this.form.get('title').value && this.form.get('country').value && this.form.get('city').value && this.form.get('street').value) {
      console.log("not-null");
      this.new_post.HostId = JSON.parse(localStorage.getItem('currentUser')).UserID;
      this.new_post.Title = this.form.get('title').value;
      this.new_post.Street = this.form.get('street').value;
      this.new_post.City = this.form.get('city').value;
      this.new_post.Country = this.form.get('country').value;
      this.new_post.Description = this.form.get('details').value;
      if (this.rangeAge) {
        this.new_post.RangeAge = new AgeRange;
        this.new_post.RangeAge.MinAge = this.value_age;
        this.new_post.RangeAge.MaxAge = this.highValue_age;
      }
      if (this.rangeHour) {
        this.new_post.RangeHours = new HoursRange;
        this.new_post.RangeHours.StartHour = this.value_hours;
        this.new_post.RangeHours.MaxHour = this.highValue_hours;
      }
      this.new_post.Gender = this.form.get('gender').value;
      this.new_post.servicesType = this.toppings.value.map((v: ServiceTypeMapper) => { return v.IdServiceType });
      console.log(this.toppings.value.map((v: ServiceTypeMapper) => { return v.IdServiceType }));

      console.log("new_post: ", this.new_post)
      if (this.status)
        this.suggestionService.post(this.new_post).subscribe(x => console.log('post ', x));
      else this.suggestionService.put(this.new_post).subscribe(x => console.log('post ', x));

    }
  }
}
