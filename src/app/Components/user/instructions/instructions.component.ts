import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/Services/Quiz-Service/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent {

  quiz_id:any;
  quizzes:any;
  constructor(private quiz:QuizService,private jitu:ActivatedRoute, private route:Router) {
    this.jitu.params.subscribe((res:any)=>{
      console.log(res.quiz_id);
      this.quiz_id = res.quiz_id;
    })

    this.quiz.getQuizById(this.quiz_id).subscribe((res:any)=>{
      console.log(res);
      this.quizzes = res;
    })

  }
  
  startExam(){
    Swal.fire({
      title: 'Start Exam?',
      text: "Are you sure want to Start Exam",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Start'    
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigate(['startExam/'+this.quiz_id]);
      }
    })
  }
  
}
