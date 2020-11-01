import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HostService } from '../services/host.service'
import { Host } from '../models/Host';
import { Traveler } from '../models/Traveler';
import { TravelerService } from '../services/traveler.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {
  @Input() status_user: string;
  @Input() status: boolean;

  hide = true;
  host_to_add: Host = new Host;
  traveler_to_add: Traveler = new Traveler;

  messageHost = { error: '' };
  selectedIndex = 0;

  constructor(private authService: AuthService, private hostService: HostService, private travelerService: TravelerService,
    public router: Router) { }

  ngOnInit() {
    if (this.status_user == 'traveler')
      this.selectedIndex = 1
    if (this.status)
      this.index_status = 1;
    else this.index_status = 0;
  }
  text_button = ['Signup', 'Save']
  index_status;
  form_host = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthDate: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    details: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  form_traveler = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    birthDate: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  get name_host(): any {
    return this.form_host.get('name');
  }

  get password_host(): any {
    return this.form_host.get('password');
  }
  get email_host(): any {
    return this.form_host.get('email');
  }
  get birthDate_host(): any {
    return this.form_host.get('birthDate');
  }
  get gender_host(): any {
    return this.form_host.get('gender');
  }
  get phone_host(): any {
    return this.form_host.get('phone');
  } get details_host(): any {
    return this.form_host.get('details');
  }

  onSubmit_host(): void {
    console.log(this.form_host.value);
    if (this.form_host.get('name').value && this.form_host.get('password').value
      && this.form_host.get('email').value && this.form_host.get('birthDate').value
      && this.form_host.get('gender').value && this.form_host.get('phone').value
      && this.form_host.get('details').value) {
      {
        console.log("not-null");

        this.host_to_add.HostName = this.form_host.get('name').value;
        this.host_to_add.BirthDate = this.form_host.get('birthDate').value;
        this.host_to_add.gender = this.form_host.get('gender').value;
        this.host_to_add.HostEmail = this.form_host.get('email').value;
        this.host_to_add.HostTel = this.form_host.get('phone').value;
        this.host_to_add.HostTextDetails = this.form_host.get('details').value;
        this.host_to_add.HostPassword = this.form_host.get('password').value;
        this.host_to_add.UserName = this.form_host.get('name').value;
        console.log(this.host_to_add);
        this.hostService.post(this.host_to_add).subscribe((h: User) => {
          localStorage.setItem("currentUser", JSON.stringify(h));
          console.log("new host::", h);
          this.router.navigate(['/home']);
        });


      }
    }
  }

  onSubmit_traveler(): void {
    console.log(this.form_traveler.value);
    if (this.form_host.get('name').value != null && this.form_host.get('password').value != null
      && this.form_host.get('birthDate').value != null && this.form_host.get('gender').value != null) {
      console.log("not-null");
      this.traveler_to_add.TravelerName = this.form_traveler.get('name').value;
      this.traveler_to_add.TravelerPassword = this.form_traveler.get('password').value;
      this.traveler_to_add.gender = this.form_traveler.get('gender').value;
      this.traveler_to_add.BirthDate = this.form_traveler.get('birthDate').value;
      this.traveler_to_add.UserName = this.form_traveler.get('name').value;
      console.log(this.traveler_to_add);
      this.travelerService.post(this.traveler_to_add).subscribe((t: User) => {
        localStorage.setItem("currentUser", JSON.stringify(t));
        console.log("new traveler::", t);
        this.travelerService.subjectLogin.next(true);
        this.router.navigate(['/home']);
      });;

    }
    else console.log('hello', (this.form_host.get('name').value != null && this.form_host.get('password').value != null
      && this.form_host.get('birthDate').value != null && this.form_host.get('gender').value != null));

  }

  getErrorMessageEmail_host() {
    if (this.email_host.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email_host.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageName_host() {
    if (this.name_host.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name_host.invalid ? 'Not a valid name' : '';
  }
  getErrorMessagePassword_host() {
    if (this.password_host.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password_host.invalid ? 'Not a valid password' : '';
  }
  getErrorMessageBirthDate_host() {
    if (this.birthDate_host.hasError('required')) {
      return 'You must enter a value';
    }

    return this.birthDate_host.invalid ? 'Not a valid birthDate' : '';
  }
  getErrorMessageDetails_host() {
    if (this.details_host.hasError('required')) {
      return 'You must enter a value';
    }

    return this.details_host.invalid ? 'Not a valid details' : '';
  }
  getErrorMessagePhone_host() {
    if (this.phone_host.hasError('required')) {
      return 'You must enter a value';
    }

    return this.phone_host.invalid ? 'Not a valid phone' : '';
  }
  getErrorMessageGender_host() {
    if (this.gender_host.hasError('required')) {
      return 'You must enter a value';
    }

    return this.gender_host.invalid ? 'Not a valid gender' : '';
  }

  get name_traveler(): any {
    return this.form_host.get('name');
  }

  get password_traveler(): any {
    return this.form_host.get('password');
  }
  get email_traveler(): any {
    return this.form_host.get('email');
  }
  get birthDate_traveler(): any {
    return this.form_host.get('birthDate');
  }
  get gender_traveler(): any {
    return this.form_host.get('gender');
  }

  getErrorMessageName_traveler() {
    if (this.name_traveler.hasError('required')) {
      return 'You must enter a value';
    }

    return this.name_traveler.invalid ? 'Not a valid name' : '';
  }
  getErrorMessagePassword_traveler() {
    if (this.password_traveler.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password_traveler.invalid ? 'Not a valid password' : '';
  }
  getErrorMessageBirthDate_traveler() {
    if (this.birthDate_traveler.hasError('required')) {
      return 'You must enter a value';
    }

    return this.birthDate_traveler.invalid ? 'Not a valid birthDate' : '';
  }
  getErrorMessageGender_traveler() {
    if (this.gender_traveler.hasError('required')) {
      return 'You must enter a value';
    }

    return this.gender_traveler.invalid ? 'Not a valid gender' : '';
  }
}
