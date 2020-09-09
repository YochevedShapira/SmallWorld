import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HostService } from '../services/host.service'
import { Host } from '../models/Host';
import { Traveler } from '../models/Traveler';
import { TravelerService } from '../services/traveler.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
}
