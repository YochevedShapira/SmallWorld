import { Component, OnInit, Host } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }
  users: Host[];

  ngOnInit() {
  }

  edit(host) {
    this.authService.put(host).subscribe((users: any[]) => { this.users = users; console.log("edit ", users) });
  }

  delete(id: number) {
    this.authService.delete(id).subscribe((users: any[]) => this.users = users);
  }

}



