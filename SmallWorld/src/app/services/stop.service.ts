import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stop } from '../models/Stop';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StopService {

  constructor(private http: HttpClient) { }
  post(stop: Stop) {
    return this.http.post(`${environment.apiUrl}/Stop`, stop);
  }
  put(stop: Stop) {
    return this.http.put(`${environment.apiUrl}/Stop`, stop);
  }
  get() {
    return this.http.get(`${environment.apiUrl}/Stop`);
  }
  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/Stop/${id}`);
  }
}
