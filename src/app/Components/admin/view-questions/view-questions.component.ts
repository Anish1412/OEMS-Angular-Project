import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/Services/Question-service/question.service';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit{

  constructor(private jitu:ActivatedRoute, private ques:QuestionService) {}

  id:any;
  title:any;
  ngOnInit(): void {
    this.jitu.params.subscribe((res:any)=>{
      console.log(res);
      this.id = res.id;
      this.title = res.title;
    })
    this.getAllQuestionByQuizId();
  }


  getAllQuestion:any;
  getAllQuestionByQuizId(){
    this.ques.getAllQuestionByQuizId(this.id).subscribe((res:any)=>{
      console.log(res);
      this.getAllQuestion = res;
    })
  }

  deleteQuestion(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this Question?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'    
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your Question has been deleted.',
          'success'
        ),
        this.ques.deleteQuestion(id).subscribe((res:any)=>{
          this.getAllQuestionByQuizId();
        })  
      }
    })
    
  }


}
