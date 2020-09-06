import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Traveler } from '../models/Traveler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravelerService {

  constructor(private http: HttpClient, private router: Router) { }
  post(traveler: Traveler) {
    console.log("last valid:", traveler);

    this.http.post(`${environment.apiUrl}/Traveler/post`, traveler).subscribe((t: Traveler) => {
      localStorage.setItem("currentUser", JSON.stringify(t));
      console.log("new traveler::", t);
      this.router.navigate(['/home']);
    });
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
