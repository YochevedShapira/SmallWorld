import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Traveler } from '../models/Traveler';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TravelerService {

  subjectLogin:Subject<boolean>=new Subject();

  constructor(private http: HttpClient, private router: Router) { }
  post(traveler: Traveler) {
    console.log("last valid:", traveler);
   return this.http.post(`${environment.apiUrl}/Traveler/post`, traveler)
  }
  put(traveler: Traveler) {
    return this.http.put(`${environment.apiUrl}/Traveler`, traveler);
  }
  get() {
    return this.http.get(`${environment.apiUrl}/Traveler`);
  }
  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/Traveler/${id}`);
  }
}
