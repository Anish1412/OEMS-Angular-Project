import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/Category-Service/category.service';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quizzes',
  templateUrl: './add-quizzes.component.html',
  styleUrls: ['./add-quizzes.component.css']
})
export class AddQuizzesComponent implements OnInit{
  constructor(private Quiz:QuizService, private category:CategoryService, private route:Router){}

  ngOnInit(): void {
    this.getAllCategory();
  }

  quiz:FormGroup = new FormGroup({
    'title': new FormControl('',[Validators.required]),
    'description': new FormControl('',[Validators.required]),
    'maxMarks': new FormControl('',[Validators.required]),
    'numberOfQuestions': new FormControl('',[Validators.required]),
    'active': new FormControl('',[Validators.required]),
    'category_id': new FormControl('',[Validators.required])
  })

  cate:any;
  getAllCategory(){
    this.category.getAllCategory().subscribe((res:any)=>{
      this.cate = res;
    })
  }

  addQuiz(){
    let addQuizzesData = {
      'title': this.quiz.value.title,
      'description': this.quiz.value.description,
      'maxMarks': this.quiz.value.maxMarks,
      'numberOfQuestions': this.quiz.value.numberOfQuestions,
      'active': this.quiz.value.active,
      'category': { "category_id" : this.quiz.value.category_id }
    }
    this.Quiz.addQuiz(addQuizzesData).subscribe((res:any)=>{
      console.log(res);
      Swal.fire({
        "title":`${res.title}`,
        "text": 'Quiz has been added successfully!!',
        "icon": 'success'
      })
      this.route.navigate(['/admin-dashboard/all-quiz']);
    })
  }
}
