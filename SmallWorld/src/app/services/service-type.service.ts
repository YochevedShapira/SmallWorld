import { Injectable } from '@angular/core';
import { ServiceType } from '../models/ServiceType';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServiceTypeMapper } from '../models/ServiceTypeMapper';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(private http: HttpClient) { }
  ServiceTypesList: ServiceTypeMapper[];
  resetList() {
    return this.http.get(`${environment.apiUrl}/ServicesList`);//.subscribe((l: ServiceTypeMapper[]) => {
    // this.ServiceTypesList = l; console.log(l);
  }//);

}



