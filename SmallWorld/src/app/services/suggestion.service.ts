import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Suggestion } from '../models/Suggestion';


@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private http: HttpClient) { }
  post(suggestion: Suggestion) {
    return this.http.post(`${environment.apiUrl}/Suggestion`, suggestion);
  }
  put(suggestion: Suggestion) {
    return this.http.put(`${environment.apiUrl}/Suggestion`, suggestion);
  }
  get() {
    return this.http.get(`${environment.apiUrl}/Suggestion`);
  }
  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/Suggestion/${id}`);
  }
  getAll(id: number) {
    return this.http.get(`${environment.apiUrl}/Suggestions/${id}`);
  }

  getAllTravel() {
    return this.http.get(`${environment.apiUrl}/SuggestionsAll`);
  }

}
