import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './Components/admin/admin.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserComponent } from './Components/user/user.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { MaterialsModule } from './materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './Components/admin/admin-dashboard/admin-dashboard.component';
import { AdminSidebarComponent } from './Components/admin/admin-sidebar/admin-sidebar.component';
import { AdminWelcomePageComponent } from './Components/admin/admin-welcome-page/admin-welcome-page.component';
import { AdminProfileComponent } from './Components/admin/admin-profile/admin-profile.component';
import { AllCategoryComponent } from './Components/admin/all-category/all-category.component';
import { AddCategoryComponent } from './Components/admin/add-category/add-category.component';
import { UpdateCategoryComponent } from './Components/admin/update-category/update-category.component';
import { AllQuizzesComponent } from './Components/admin/all-quizzes/all-quizzes.component';
import { AddQuizzesComponent } from './Components/admin/add-quizzes/add-quizzes.component';
import { ViewQuestionsComponent } from './Components/admin/view-questions/view-questions.component';
import { AddQuestionComponent } from './Components/admin/add-question/add-question.component';
import { UpdateQuizzesComponent } from './Components/admin/update-quizzes/update-quizzes.component';
import { UpdateQuestionComponent } from './Components/admin/update-question/update-question.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginService } from './Services/loginService/login.service';
import { LoginInterceptor } from './Services/Interceptor/login.interceptor';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';
import { UserSidebarComponent } from './Components/user/user-sidebar/user-sidebar.component';
import { UserWelcomePageComponent } from './Components/user/user-welcome-page/user-welcome-page.component';
import { UserProfileComponent } from './Components/user/user-profile/user-profile.component';
import { LoadQuizzesComponent } from './Components/user/load-quizzes/load-quizzes.component';
import { InstructionsComponent } from './Components/user/instructions/instructions.component';
import { StartExamComponent } from './Components/user/start-exam/start-exam.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NavbarComponent,
    UserComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    AdminSidebarComponent,
    AdminWelcomePageComponent,
    AdminProfileComponent,
    AllCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    AllQuizzesComponent,
    AddQuizzesComponent,
    ViewQuestionsComponent,
    AddQuestionComponent,
    UpdateQuizzesComponent,
    UpdateQuestionComponent,
    UserDashboardComponent,
    UserSidebarComponent,
    UserWelcomePageComponent,
    UserProfileComponent,
    LoadQuizzesComponent,
    InstructionsComponent,
    StartExamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:LoginInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
