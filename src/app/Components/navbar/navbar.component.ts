import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginService/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private http:LoginService, private route:Router){}

  isLoggedIn:boolean = true;
  user:any;

  ngOnInit(): void {
    this.isLoggedIn = this.http.isLoggedIn();
    this.user = this.http.getUser();

    this.http.loginStatusSubject.asObservable().subscribe((res)=>{
      this.isLoggedIn = this.http.isLoggedIn();
      this.user = this.http.getUser();
    })
  }

  logout(){
    this.http.logout();
    this.http.loginStatusSubject.next(false);
    this.route.navigate(['signin']);
  }
}
