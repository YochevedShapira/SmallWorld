import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceTypeService } from './services/service-type.service'
import { TravelerService } from './services/traveler.service';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private serviceTypeService: ServiceTypeService, public travelService: TravelerService,public authService:AuthService) { }
  title = 'SmallWorld';
  index = 0;
  isLogin = false;
  ngOnInit() {
    if (localStorage.getItem("currentUser"))
      this.isLogin = true;
    this.travelService.subjectLogin.subscribe(res => {
      this.isLogin = res;
    })
  };

}

