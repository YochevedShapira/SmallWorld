import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceTypeService } from './services/service-type.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private serviceTypeService: ServiceTypeService) { }
  title = 'SmallWorld';
  index = 0
  ngOnInit() {
    // this.serviceTypeService.resetList();
  };
}

