import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category-Service/category.service';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';
import { LoginService } from 'src/app/Services/loginService/login.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit{
  constructor(private http:LoginService,private c:CategoryService, private route:Router){}

  ngOnInit(): void {
    this.getAllCategoryData();
  }

  logout(){
    this.http.logout();
    this.http.loginStatusSubject.next(false);
    this.route.navigate(['signin']);
  }

  categoryData:any;
  getAllCategoryData(){
    this.c.getAllCategory().subscribe((res:any)=>{
      console.log(res);
      this.categoryData = res;
    })
  }
}
