import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/Question-service/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit{
  constructor(private ques:QuestionService, private jitu:ActivatedRoute,private route:Router){}

  id:any;
  title:any;
  question_id:any;
  ngOnInit(): void {
    this.jitu.params.subscribe((res:any)=>{
      console.log(res);
      this.id = res.id;
      this.title = res.title;
      this.question_id = res.question_id
    })
    this.getQuestionById();
  }

  updateQuestionForm:FormGroup = new FormGroup({
    "content": new FormControl('',[Validators.required]),
    "option1":new FormControl('',[Validators.required]),
    "option2":new FormControl('',[Validators.required]),
    "option3":new FormControl('',[Validators.required]),
    "option4":new FormControl('',[Validators.required]),
    "answer":new FormControl('',[Validators.required]),
  })

  updateData:any;
  getQuestionById(){
    this.ques.getQuestionById(this.question_id).subscribe((res:any)=>{
      console.log(res);
      this.updateData = res;
    })
  }

  updateQuestion(){
    console.log(this.updateQuestionForm.value);
    let UpdateQuestion = {
      "question_id": this.question_id,
      "content": this.updateQuestionForm.value.content,
      "option1":this.updateQuestionForm.value.option1,
      "option2":this.updateQuestionForm.value.option2,
      "option3":this.updateQuestionForm.value.option3,
      "option4":this.updateQuestionForm.value.option4,
      "answer":this.updateQuestionForm.value.answer,
      "quiz": { "quiz_id" : this.id }
    }
    this.ques.updateQuestion(UpdateQuestion).subscribe((res:any)=>{
      console.log(res);
      this.route.navigate(['admin-dashboard/view-question/'+this.id+'/'+this.title]);
    })
  }

}
