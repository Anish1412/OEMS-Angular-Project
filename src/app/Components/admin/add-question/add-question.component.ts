import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from 'src/app/Services/Question-service/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit{
  constructor(private ques:QuestionService, private jitu:ActivatedRoute, private route:Router){}

  AddQuestionForm:FormGroup = new FormGroup({
    "content": new FormControl('',[Validators.required]),
    "option1":new FormControl('',[Validators.required]),
    "option2":new FormControl('',[Validators.required]),
    "option3":new FormControl('',[Validators.required]),
    "option4":new FormControl('',[Validators.required]),
    "answer":new FormControl('',[Validators.required]),
  })

  id:any;
  title:any;
  ngOnInit(): void {
    this.jitu.params.subscribe((res:any)=>{
      console.log(res);
      this.id = res.id;
      this.title = res.title;
    })
  }

   AddQuestion = {
    "content": this.AddQuestionForm.value.content,
    "option1": this.AddQuestionForm.value.option1,
    "option2": this.AddQuestionForm.value.option2,
    "option3": this.AddQuestionForm.value.option3,
    "option4": this.AddQuestionForm.value.option4,
    "answer": this.AddQuestionForm.value.answer,
  }

  addQuestion(){
    console.log(this.AddQuestionForm.value);
    let AddQuestion = {
      "content": this.AddQuestionForm.value.content,
      "option1": this.AddQuestionForm.value.option1,
      "option2": this.AddQuestionForm.value.option2,
      "option3": this.AddQuestionForm.value.option3,
      "option4": this.AddQuestionForm.value.option4,
      "answer": this.AddQuestionForm.value.answer,
      "quiz": {"quiz_id": this.id}
    }

    this.ques.addQuestion(AddQuestion).subscribe((res:any)=>{
      console.log(res);
      this.route.navigate(['/admin-dashboard/view-question/'+this.id+'/'+this.title]);
    })
  }

}
