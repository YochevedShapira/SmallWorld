import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User, Status } from '../models/User';
import { Router } from '@angular/router';
import { Host } from '../models/Host';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private key = 'currentUser';
  message = { error: '' };
  constructor(private http: HttpClient, private router: Router
  ) { }

  post(host: Host) {
    this.http.post(environment.apiUrl + "Host/", host)
      .subscribe((token: string) => {
        localStorage.setItem(this.key, token);
        this.message.error = "";
        this.router.navigate(['/home']);
      });
  }
  put(host: Host) {
    console.log("put ", host)
    return this.http.put(`${environment.apiUrl}/User`, host);
  }
  get() {
    return this.http.get(`${environment.apiUrl}/User`);
  }
  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/User/${id}`);
  }

  login(name: string, password: string) {
    let user = new User();
    user.UserName = name;
    user.UserPassword = password;
    this
      .http
      .post(`${environment.apiUrl}/Login`, user)
      .subscribe((currentUser: User) => {
        localStorage.setItem(this.key, JSON.stringify(currentUser));
        console.log("111");
        console.log(currentUser.UserStaus);
        console.log(Status.Host);
        console.log("222");

        if (currentUser.UserStaus == Status.Host)
          console.log("host!!!!!!!!");
        if (currentUser.UserStaus == Status.Traveler)
          console.log("travelerrrrrr!!!!!!");

        this.message.error = "";
        this.router.navigate(['/home']);
      },
        (error: any) => {
          this.message.error = "Username or password is incorrect";
        });
  }
  logout() {
    localStorage.removeItem(this.key);
    this.router.navigate(['/login']);
  }
  token() {
    return localStorage.getItem(this.key);
  }

}
