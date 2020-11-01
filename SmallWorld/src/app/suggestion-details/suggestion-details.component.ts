import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Suggestion } from '../models/Suggestion';

@Component({
  selector: 'app-suggestion-details',
  templateUrl: './suggestion-details.component.html',
  styleUrls: ['./suggestion-details.component.scss']
})
export class SuggestionDetailsComponent implements OnInit {

  suggestion: Suggestion;
  constructor(private dialogRef: MatDialogRef<SuggestionDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) data) {
    this.suggestion = data.sug;
    console.log(this.suggestion)
  }

  ngOnInit(): void {

  }

  close() {
    this.dialogRef.close();
  }
}
