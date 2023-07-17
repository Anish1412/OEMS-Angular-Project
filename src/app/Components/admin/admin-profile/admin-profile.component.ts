import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/loginService/login.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit{
  constructor(private profile:LoginService){}

  userData:any;
  ngOnInit(): void {
      this.userData = this.profile.getUser();
  }
}
