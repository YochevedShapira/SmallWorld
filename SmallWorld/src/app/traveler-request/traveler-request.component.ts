import { Component, OnInit } from '@angular/core';
import { ServiceTypeMapper } from '../models/ServiceTypeMapper';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Suggestion } from '../models/Suggestion';
import { Options } from 'ng5-slider';
import { ServiceTypeService } from '../services/service-type.service';
import { Request } from '../models/Request';
import { RequestService } from '../services/request.service';
import { HoursRange } from '../models/HoursRange';

@Component({
  selector: 'app-traveler-request',
  templateUrl: './traveler-request.component.html',
  styleUrls: ['./traveler-request.component.scss']
})
export class TravelerRequestComponent implements OnInit {

  constructor(private requestService: RequestService, private serviceTypeService: ServiceTypeService) { }
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
  form = new FormGroup({
    country: new FormControl('', Validators.required),
    city: new FormControl(''),
    street: new FormControl(''),
  });
  changeRangeHour() {
    this.rangeHour = !this.rangeHour;
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
      if (this.rangeHour) {
        this.new_request.RangeHours = new HoursRange;
        this.new_request.RangeHours.StartHour = this.value_hours;
        this.new_request.RangeHours.MaxHour = this.highValue_hours;
      }
      this.new_request.servicesType = this.toppings.value.map((v: ServiceTypeMapper) => { return v.IdServiceType });
      console.log(this.toppings.value.map((v: ServiceTypeMapper) => { return v.IdServiceType }));
      console.log("new_traveler_request: ", this.new_request)
      this.requestService.post(this.new_request).subscribe(x => console.log('request ', x));

    }
  }
}
