import { Injectable } from '@angular/core';
import { LocationHost } from '../models/LocationHost';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationHostService {

  constructor(private http: HttpClient) { }
  post(locationHost: LocationHost) {
    return this.http.post(`${environment.apiUrl}/LocationHost`, locationHost);
  }
  put(locationHost: LocationHost) {
    return this.http.put(`${environment.apiUrl}/LocationHost`, locationHost);
  }
  get() {
    return this.http.get(`${environment.apiUrl}/StLocationHostop`);
  }
  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/LocationHost/${id}`);
  }
}
