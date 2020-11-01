import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Host } from '../models/Host';
import { User, Status } from '../models/User';
import { Router } from '@angular/router';
import { SuggestionService } from '../services/suggestion.service';
import { Suggestion } from '../models/Suggestion';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SuggestionDetailsComponent } from '../suggestion-details/suggestion-details.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  suggestions: Suggestion[] = [];

  constructor(public authService: AuthService, public router: Router,
    public suggestionService: SuggestionService,
    private dialog: MatDialog) { }
  users: Host[] = [];

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!this.currentUser)
      this.router.navigate(['/login']);
    if (this.currentUser.UserStaus == Status.Host)
      this.router.navigate(['/home-host']);
    this.suggestionService.getAllTravel().subscribe((res: any) => {
      this.suggestions = res;
    })
  }

  req() {
    this.router.navigate(["traveler-request"]);
  }

  detail(sug: Suggestion) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      id: sug.SuggestionID,
      sug: sug
    };

    this.dialog.open(SuggestionDetailsComponent, dialogConfig);

  }
  delete(id: number) {
    this.authService.delete(id).subscribe((users: any[]) => this.users = users);
  }

}



