import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category-Service/category.service';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quizzes',
  templateUrl: './update-quizzes.component.html',
  styleUrls: ['./update-quizzes.component.css']
})
export class UpdateQuizzesComponent implements OnInit{
  constructor(private q:QuizService,private cate:CategoryService, private jitu:ActivatedRoute, private route:Router){}

  category:any;
  id:any;
  ngOnInit(): void {
    this.cate.getAllCategory().subscribe((res:any)=>{
      this.category = res;
    })

    this.jitu.params.subscribe((res:any)=>{
      this.id = res.id;
    })

    this.getQuizById();
  }

  quiz:FormGroup = new FormGroup({
    'quiz_id': new FormControl('',[Validators.required]),
    'title': new FormControl('',[Validators.required]),
    'description': new FormControl('',[Validators.required]),
    'maxMarks': new FormControl('',[Validators.required]),
    'numberOfQuestions': new FormControl('',[Validators.required]),
    'active': new FormControl('',[Validators.required]),
    'category_id': new FormControl('',[Validators.required])
  })

  updateQuiz(){
    let uQuiz = {
      'quiz_id': this.quiz.value.quiz_id,
      'title': this.quiz.value.title,
      'description': this.quiz.value.description,
      'maxMarks': this.quiz.value.maxMarks,
      'numberOfQuestions': this.quiz.value.numberOfQuestions,
      'active': this.quiz.value.active,
      'category': { "category_id" : this.quiz.value.category_id }
    }

    this.q.updateQuiz(uQuiz).subscribe((res:any)=>{
      Swal.fire({
        title:`${res.title}`,
        text:'Quiz got updated succesfully!!',
        icon:'success'
      })
      this.route.navigate(['/admin-dashboard/all-quiz']);
    })
  }

  quizValue:any;
  getQuizById(){
    this.q.getQuizById(this.id).subscribe((res:any)=>{
      this.quizValue = res;
    })
  }

}
