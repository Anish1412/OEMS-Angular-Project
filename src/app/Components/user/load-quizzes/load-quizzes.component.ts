import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category-Service/category.service';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';

@Component({
  selector: 'app-load-quizzes',
  templateUrl: './load-quizzes.component.html',
  styleUrls: ['./load-quizzes.component.css']
})
export class LoadQuizzesComponent implements OnInit{

  category_id:any;
  quizzes:any;
  constructor(private jitu:ActivatedRoute, private category:CategoryService, private quiz:QuizService) {
    this.jitu.params.subscribe((res:any)=>{
      console.log(res.Category_id);
      this.category_id = res.Category_id;

      if(this.category_id == 0){
        this.quiz.getActiveQuizzes().subscribe((res:any)=>{
          console.log(res);
          this.quizzes = res;
        })
      }
      else {
        this.quiz.getActiveQuizzesByCategory(this.category_id).subscribe((res:any)=>{
          console.log(res);
          this.quizzes = res;
        })
      }
      // this.getCategoryById();
    })

  }

  // getCategoryById(){
  //   this.category.getCategoryById(this.category_id).subscribe((res:any)=>{
  //     console.log(res);
  //   })
  // }


  ngOnInit(): void {

  }
}
