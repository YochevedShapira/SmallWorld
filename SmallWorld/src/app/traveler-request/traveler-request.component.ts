import { Component, OnInit } from '@angular/core';
import { ServiceTypeMapper } from '../models/ServiceTypeMapper';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Suggestion } from '../models/Suggestion';
import { Options } from 'ng5-slider';
import { ServiceTypeService } from '../services/service-type.service';
import { Request } from '../models/Request';
import { RequestService } from '../services/request.service';
import { HoursRange } from '../models/HoursRange';
import { AgeRange } from '../models/AgeRange';
import { Router } from '@angular/router';

@Component({
  selector: 'app-traveler-request',
  templateUrl: './traveler-request.component.html',
  styleUrls: ['./traveler-request.component.scss']
})
export class TravelerRequestComponent implements OnInit {
  suggestions: Suggestion[] = [];

  constructor(private requestService: RequestService,
    private serviceTypeService: ServiceTypeService,
    public router: Router) { }
  ngOnInit() {
    console.log();
    this.serviceTypeService.resetList().subscribe((l: ServiceTypeMapper[]) => { this.toppingList = l; });

  }
  rangeAge = false;
  rangeHour = false;
  toppings = new FormControl();
  toppingList: ServiceTypeMapper[];
  new_request: Request = new Request;
  value_hours: number = 10;
  highValue_hours: number = 15;
  options_hours: Options = {
    floor: 0,
    ceil: 24
  };
  value_age: number = 40;
  highValue_age: number = 60;
  options_age: Options = {
    floor: 0,
    ceil: 120
  };
  form = new FormGroup({
    country: new FormControl('', Validators.required),
    city: new FormControl(''),
    street: new FormControl(''),
    gender: new FormControl(''),

  });
  changeRangeAge() {
    this.rangeAge = !this.rangeAge;
  }
  changeRangeHour() {
    this.rangeHour = !this.rangeHour;
  }
  get street(): any {
    return this.form.get('street');
  }
  get gender(): any {
    return this.form.get('gender');
  }

  get city(): any {
    return this.form.get('city');
  }

  get country(): any {
    return this.form.get('country');
  }
  getErrorMessageCountry() {
    if (this.country.hasError('required')) {
      return 'You must enter a value';
    }
    return this.country.invalid ? 'Not a valid country' : '';
  }


  onSubmit() {

    if (this.form.get('country').value) {
      console.log("not-null");
      this.new_request.TravelerID = JSON.parse(localStorage.getItem('currentUser')).UserID;
      this.new_request.Street = this.form.get('street').value;
      this.new_request.City = this.form.get('city').value;
      this.new_request.Country = this.form.get('country').value;
      if (this.rangeAge) {
        this.new_request.AgeRange = new AgeRange;
        this.new_request.AgeRange.MinAge = this.value_age;
        this.new_request.AgeRange.MaxAge = this.highValue_age;
      }
      if (this.rangeHour) {
        this.new_request.HoursRange = new HoursRange;
        this.new_request.HoursRange.StartHour = this.value_hours;
        this.new_request.HoursRange.MaxHour = this.highValue_hours;
      }
      this.new_request.Gender = this.form.get('gender').value;

      this.new_request.ServicesTypes = this.toppings.value.map((v: ServiceTypeMapper) => { return v.IdServiceType });
      console.log(this.toppings.value.map((v: ServiceTypeMapper) => { return v.IdServiceType }));
      console.log("new_traveler_request: ", this.new_request)
      this.requestService.post(this.new_request).subscribe((x: any) => {
        this.suggestions = x;
        localStorage.setItem("result", JSON.stringify(this.suggestions));
        this.router.navigate(["result"]);
      });

    }
  }

  detail(sug) {

  }
}
