import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Host } from '../models/Host';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  constructor(private http: HttpClient, private router: Router) { }
  post(host: Host) {
    this.http.post(`${environment.apiUrl}/Host`, host).subscribe((h: Host) => {
      localStorage.setItem("currentUser", JSON.stringify(h));
      console.log("new host::", h);
      this.router.navigate(['/home']);
    });
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
}
