import { Component, OnInit } from '@angular/core';
import { Suggestion } from '../models/Suggestion';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  suggestion: Suggestion;
  ngOnInit(): void {
    this.suggestion = JSON.parse(this.route.snapshot.paramMap.get('data'));
    console.log(this.suggestion);

  }

}
