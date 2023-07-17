import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/Question-service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start-exam',
  templateUrl: './start-exam.component.html',
  styleUrls: ['./start-exam.component.css']
})
export class StartExamComponent implements OnInit {
  constructor(private ques:QuestionService, private jitu:ActivatedRoute){}

  quizId:any;
  questions:any;
  timer:any;
  isSubmit:boolean = false;

  ngOnInit(): void {
    this.jitu.params.subscribe((res:any)=>{
      console.log(res.quiz_id);
      this.quizId = res.quiz_id;
    })

    this.ques.getAllQuestionByQuizId(this.quizId).subscribe((res:any)=>{
      console.log(res);
      this.questions = res;
      this.timer = this.questions.length*0.30*100;
    })
    this.startTimer();
  }

  getFormattedTime(){
    let min = Math.floor(this.timer/60);
    let sec = this.timer - min*60;
    return `${min}:${sec}`;
  }

  startTimer(){
    let t = window.setInterval(()=>{
      if(this.timer <= 0){
        clearInterval(t);
      }
      else {
        this.timer--;
      }
    },1000)
  }

  submit(){
    Swal.fire({
      title: 'Start Exam?',
      text: "Are you sure want to End Exam",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Submit Exam'    
    }).then((result) => {
      if (result.isConfirmed) {
        this.directSubmit();
      }
    })
  }

  marksGot:any;
  correctAnswers:any;
  attempted:any;
  directSubmit(){
    this.ques.directSubmit(this.questions).subscribe((res:any)=>{
      console.log(res);
      this.isSubmit = true;
      this.marksGot = res.marksGot;
      this.correctAnswers = res.correctAnswers;
      this.attempted = res.attempted;
    })
  }

  printResult(){
    window.print();
  }
}
