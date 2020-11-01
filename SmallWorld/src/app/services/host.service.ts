import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Host } from '../models/Host';
import { Router } from '@angular/router';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private http: HttpClient, private router: Router) { }
  post(host: Host) {
    return this.http.post(`${environment.apiUrl}/Host`, host)
  }
  put(host: Host) {
    return this.http.put(`${environment.apiUrl}/Host`, host);
  }
  get() {
    return this.http.get(`${environment.apiUrl}/Host`);
  }
  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/Host/${id}`);
  }
  getId(id: number) {
    return this.http.delete(`${environment.apiUrl}/Host/${id}`);
  }
}
