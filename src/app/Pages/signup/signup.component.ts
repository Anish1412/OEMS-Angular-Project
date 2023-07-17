import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/loginService/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private signup:LoginService, private route:Router){}

  Register:FormGroup = new FormGroup({
    'firstname': new FormControl('',[Validators.required]),
    'username': new FormControl('',[Validators.required]),
    'lastname': new FormControl('',[Validators.required]),
    'password': new FormControl('',[Validators.required]),
    'email': new FormControl('',[Validators.required, Validators.email]),
    'phone': new FormControl('',[Validators.required])
  })

  Signup(){
    this.signup.saveUser(this.Register.value).subscribe((res)=>{
      console.log(res);
      this.route.navigate(['signin']);
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
