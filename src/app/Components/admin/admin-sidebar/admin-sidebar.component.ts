import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginService/login.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  constructor(private http:LoginService, private route:Router){}

  logout(){
    this.http.logout();
    this.http.loginStatusSubject.next(false);
    this.route.navigate(['signin']);
  }
}
