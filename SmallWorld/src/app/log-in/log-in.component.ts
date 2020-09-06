import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/User';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  constructor(private authService: AuthService) { }
  hide = true;
  
  ngOnInit() {
    //this.UserService.GET().subscribe(x=>console.log("xxx:   ",x));
  }
  
  //@ViewChild('title_page', { static: true }) title_page: ElementRef;
  @ViewChild('header', { static: true }) header: ElementRef;
  @ViewChild('colorPicker', { static: true }) colorPicker: ElementRef;




 changeColor() {
    this.header.nativeElement.setAttribute('style', `background:${this.colorPicker.nativeElement.value}`)
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get name(): any {
    return this.form.get('name');
  }
  get password(): any {
    return this.form.get('password');
  }

  getErrorMessageName() {
    if (this.name.hasError('required')) {
      //this.title_page.nativeElement.innerHTML="bla bla";
      return 'You must enter a value';
    }

    return this.name.invalid ? 'Not a valid name' : '';
  }
  getErrorMessagePassword() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.invalid ? 'Not a valid password' : '';
  }
  onSubmit() {
    console.log("????!!!!");
    
    console.log(this.form.value);
    //console.log(this.title_page.nativeElement.innerHTML);
    if (this.form.get('name').value && this.form.get('password').value) {
      console.log("not-null");
      this.authService.login(this.form.get('name').value, this.form.get('password').value);
    }
  }
}
