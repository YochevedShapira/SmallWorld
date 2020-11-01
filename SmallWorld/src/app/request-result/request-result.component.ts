import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../models/Suggestion';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SuggestionDetailsComponent } from '../suggestion-details/suggestion-details.component';

@Component({
  selector: 'app-request-result',
  templateUrl: './request-result.component.html',
  styleUrls: ['./request-result.component.scss']
})
export class RequestResultComponent implements OnInit {

  suggestions: Suggestion[] = [];

  constructor(public router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.suggestions = JSON.parse(localStorage.getItem("result"));
  }

  detail(sug: Suggestion) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: sug.SuggestionID,
      sug: sug
    };

    this.dialog.open(SuggestionDetailsComponent, dialogConfig);

  }

  search() {
    this.router.navigate(["traveler-request"])
  }

  all() {
    this.router.navigate(["home"])
  }

}
