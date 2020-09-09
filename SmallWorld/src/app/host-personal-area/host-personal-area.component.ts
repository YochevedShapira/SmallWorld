import { Component, OnInit, Input } from '@angular/core';
import { Suggestion } from '../models/Suggestion';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-host-personal-area',
  templateUrl: './host-personal-area.component.html',
  styleUrls: ['./host-personal-area.component.scss']
})
export class HostPersonalAreaComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  panelOpenState = false;
  suggestion: Suggestion;

  edit(suggestion: Suggestion) {
    this.router.navigate(['/edit-post', { data: JSON.stringify(suggestion) }])
  }
  ngOnInit() {
    this.suggestion = JSON.parse(this.route.snapshot.paramMap.get('data'));
  }
}
