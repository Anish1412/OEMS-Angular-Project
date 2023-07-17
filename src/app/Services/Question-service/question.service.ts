import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getAllQuestionByQuizId(id:number){
    return this.http.get(`${baseUrl}question/quiz/all/${id}`);
  }

  public addQuestion(data:any){
    return this.http.post(`${baseUrl}question/`,data);
  }

  public getQuestionById(id:number){
    return this.http.get(`${baseUrl}question/${id}`);
  }

  public updateQuestion(data:any){
    return this.http.put(`${baseUrl}question/`,data);
  }

  public deleteQuestion(id:number){
    return this.http.delete(`${baseUrl}question/${id}`);
  }

  public directSubmit(question:any){
    return this.http.post(`${baseUrl}question/direct-quiz/`,question);
  }
  
}
