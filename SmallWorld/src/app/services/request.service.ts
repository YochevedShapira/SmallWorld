import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Request } from '../models/Request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  post(request: Request) {
    return this.http.post(`${environment.apiUrl}/Request`, request);
  }
  put(request: Request) {
    return this.http.put(`${environment.apiUrl}/Request`, request);
  }
  get() {
    return this.http.get(`${environment.apiUrl}/Request`);
  }
  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/Request/${id}`);
  }
}
