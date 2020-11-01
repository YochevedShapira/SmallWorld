import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../models/Suggestion';
import { SuggestionService } from '../services/suggestion.service';
import { User } from '../models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-host',
  templateUrl: './home-host.component.html',
  styleUrls: ['./home-host.component.scss']
})
export class HomeHostComponent implements OnInit {

  suggestions: Suggestion[] = [];
  currentUser: User;

  constructor(public suggestionService: SuggestionService,
    public router: Router) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.suggestionService.getAll(this.currentUser.UserID).subscribe((res: any) => {
      this.suggestions = res;
    })
  }

  add() {
    this.router.navigate(["upload-post"]);
  }

  edit(s: Suggestion) {
    localStorage.setItem("suggestionEdit", JSON.stringify(s));
    this.router.navigate(["edit-post"]);
  }

}
