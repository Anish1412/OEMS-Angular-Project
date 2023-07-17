import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { HomeComponent } from './Pages/home/home.component';
import { AdminComponent } from './Components/admin/admin.component';
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
import { AdminGuard } from './Services/Admin-Guard/admin.guard';
import { UserDashboardComponent } from './Components/user/user-dashboard/user-dashboard.component';
import { UserWelcomePageComponent } from './Components/user/user-welcome-page/user-welcome-page.component';
import { UserProfileComponent } from './Components/user/user-profile/user-profile.component';
import { UserGuard } from './Services/User-Guard/user.guard';
import { LoadQuizzesComponent } from './Components/user/load-quizzes/load-quizzes.component';
import { InstructionsComponent } from './Components/user/instructions/instructions.component';
import { StartExamComponent } from './Components/user/start-exam/start-exam.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'signin',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component:AdminWelcomePageComponent
      },
      {
        path:'admin-profile',
        component:AdminProfileComponent
      },
      {
        path:'all-category',
        component:AllCategoryComponent
      },
      {
        path:'add-category',
        component:AddCategoryComponent
      },
      {
        path:'update-category/:id',
        component:UpdateCategoryComponent
      },
      {
        path:'all-quiz',
        component:AllQuizzesComponent
      },
      {
        path: 'add-quiz',
        component:AddQuizzesComponent
      },
      {
        path:'update-quiz/:id',
        component:UpdateQuizzesComponent
      },
      {
        path:'view-question/:id/:title',
        component:ViewQuestionsComponent
      },
      {
        path:'Add-question/:id/:title',
        component:AddQuestionComponent
      },
      {
        path:'update-question/:id/:question_id/:title',
        component:UpdateQuestionComponent
      }
    ]
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    canActivate:[UserGuard],
    children:[
      {
        path:'',
        component:UserWelcomePageComponent
      },
      {
        path:'user-profile',
        component:UserProfileComponent
      },
      {
        path:':Category_id',
        component:LoadQuizzesComponent
      },
      {
        path:'instructions/:quiz_id',
        component:InstructionsComponent
      }
    ]
  },
  {
    path:'startExam/:quiz_id',
    component:StartExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
