import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-quizzes',
  templateUrl: './all-quizzes.component.html',
  styleUrls: ['./all-quizzes.component.css']
})
export class AllQuizzesComponent implements OnInit{
  constructor(private quiz:QuizService ){}

  allQuiz:any;
  ngOnInit(): void {
    this.getAllQuizzData();
  }

  getAllQuizzData(){
    this.quiz.getAllQuizzData().subscribe((res:any)=>{
      console.log(res);
      this.allQuiz = res;
    })
  }

  deleteQuizById(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this Quiz?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'    
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your Quiz has been deleted.',
          'success'
        ),
        this.quiz.deleteQuizById(id).subscribe((res)=>{
          console.log(res);
          this.getAllQuizzData();
        })   
      }
    })
    
  }


}
