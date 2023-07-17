import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  public loginStatusSubject = new Subject<boolean>();

  // ADMIN
  public generateToken(data:any){
    return this.http.post(`${baseUrl}generate-token`,data);
  }

  // Login user can set token in localStorage
  public setToken(token:any){
    return localStorage.setItem("token",token);
  }

  // To Check if User is logged in or not
  public isLoggedIn(){
    let tokenStr = localStorage.getItem("token");
    if(tokenStr == null || tokenStr == '' || tokenStr == undefined){
      return false;
    }
    else {
      return true;
    }
  }

  // get Token to use multiple times wherever we want
  public getToken(){
    return localStorage.getItem("token");
  }

  // It will show the details of current loggedIn User
  public getCurrentUser(){
    return this.http.get(`${baseUrl}current-user`);
  }

  // USER
  // Data which we get from current user that we store in local Storage and convert that into string format
  public setUser(user:any){
    return localStorage.setItem('user',JSON.stringify(user));
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  // If User data is not null to return data into JSON Format else logout
  public getUser(){
    let userStr = localStorage.getItem('user');

    if(userStr != null){
      return JSON.parse(userStr);
    }
    else {
      this.logout();
      return null;
    }
  }

  // To Check User Role that it is Admin or Normal User
  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }

  public saveUser(data:any){
    return this.http.post(`${baseUrl}user/`,data);
  }

}
