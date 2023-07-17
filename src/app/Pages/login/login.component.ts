import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginService/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginService:LoginService, private route:Router){}

  hide = true;
  login:FormGroup = new FormGroup({
    "username" : new FormControl('',[Validators.required]),
    "password" : new FormControl('',[Validators.required])
  });

  loginAcc(){
    this.loginService.generateToken(this.login.value).subscribe((res:any)=>{
      console.log(res.token);
      // setToken is used to set token in localStorage
      this.loginService.setToken(res.token);
      
    // getCurrentUser will get the Current Loging user data
    this.loginService.getCurrentUser().subscribe((res:any)=>{
      console.log(res);

      this.loginService.setUser(res);

      if(this.loginService.getUserRole() == "ADMIN"){
        this.route.navigate(['admin-dashboard']);
        this.loginService.loginStatusSubject.next(true);
      }
      else if(this.loginService.getUserRole() == "NORMAL"){
        this.route.navigate(['user-dashboard']);
        this.loginService.loginStatusSubject.next(true);
      }
      
    })
      
    },
    (err)=>{
      Swal.fire({
        title: 'User not Found',
        text:'Invalid User',
        icon: 'error'
      })
    }
    )
  }
}
