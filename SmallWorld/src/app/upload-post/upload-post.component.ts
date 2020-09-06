import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SuggestionService } from '../services/suggestion.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Options } from 'ng5-slider';
import { Suggestion, AgeRange, HoursRange } from '../models/Suggestion';
import { User } from '../models/User';
import { ServiceTypeService } from '../services/service-type.service';
import { ServiceTypeMapper } from '../models/ServiceTypeMapper'
@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.scss'],
  providers: [ServiceTypeService]

})
export class UploadPostComponent implements OnInit {

  constructor(private suggestionService: SuggestionService, private serviceTypeService: ServiceTypeService) { }
  ngOnInit() {
    console.log();
    this.serviceTypeService.resetList().subscribe((l: ServiceTypeMapper[]) => { this.toppingList = l; });

  }
  toppings = new FormControl();
  toppingList: ServiceTypeMapper[];
  new_post: Suggestion = new Suggestion;
  value_age: number = 40;
  highValue_age: number = 60;
  options_age: Options = {
    floor: 0,
    ceil: 100
  };

  value_hours: number = 40;
  highValue_hours: number = 60;
  options_hours: Options = {
    floor: 0,
    ceil: 100
  };

  form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    country: new FormControl('',),
    city: new FormControl('',),
    street: new FormControl('',),
    details: new FormControl('',),
    gender: new FormControl('',),

  });
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
  }

  onSubmit() {

    if (this.form.get('title').value) {
      console.log("not-null");
      this.new_post.HostId = JSON.parse(localStorage.getItem('currentUser')).UserID;
      this.new_post.Title = this.form.get('title').value;
      this.new_post.Street = this.form.get('street').value;
      this.new_post.City = this.form.get('city').value;
      this.new_post.Country = this.form.get('country').value;
      this.new_post.Description = this.form.get('details').value;
      this.new_post.RangeAge = new AgeRange;
      this.new_post.RangeAge.MinAge = this.value_age;
      this.new_post.RangeAge.MaxAge = this.highValue_age;
      this.new_post.RangeHours = new HoursRange;
      this.new_post.RangeHours.StartHour = this.value_hours;
      this.new_post.RangeHours.MaxHour = this.highValue_hours;
      this.new_post.Gender = this.form.get('gender').value;
      this.new_post.servicesType = this.toppings.value.map((v: ServiceTypeMapper) => { return v.IdServiceType });
      console.log(this.toppings.value.map((v: ServiceTypeMapper) => { return v.IdServiceType }));

      console.log("new_post: ", this.new_post)
      this.suggestionService.post(this.new_post).subscribe(x => console.log('post ', x));

    }
  }
}
