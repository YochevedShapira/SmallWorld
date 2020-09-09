<<<<<<< HEAD
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SuggestionService } from '../services/suggestion.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Options } from 'ng5-slider';
import { Suggestion, bookedDate } from '../models/Suggestion';
import { User } from '../models/User';
import { ServiceTypeService } from '../services/service-type.service';
import { ServiceTypeMapper } from '../models/ServiceTypeMapper'
import { range } from 'rxjs';
import { HoursRange } from '../models/HoursRange';
import { AgeRange } from '../models/AgeRange';
=======
import { Component, OnInit } from '@angular/core';

>>>>>>> b4215ca5b2bcd13dd7f99897624394f0fc05a4c6
@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.scss'],

})
export class UploadPostComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
  }

<<<<<<< HEAD
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
      // if (this.status)
      this.suggestionService.post(this.new_post).subscribe(x => console.log('post ', x));
      /// else this.suggestionService.put(this.new_post).subscribe(x => console.log('post ', x));

    }
  }
=======
>>>>>>> b4215ca5b2bcd13dd7f99897624394f0fc05a4c6
}
