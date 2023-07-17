import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public getAllQuizzData(){
    return this.http.get(`${baseUrl}quiz/`);
  }

  public addQuiz(data:any){
    return this.http.post(`${baseUrl}quiz/`,data);
  }

  public getQuizById(id:number){
    return this.http.get(`${baseUrl}quiz/${id}`);
  }

  public updateQuiz(data:any){
    return this.http.put(`${baseUrl}quiz/`,data);
  }

  public deleteQuizById(id:number){
    return this.http.delete(`${baseUrl}quiz/${id}`);
  }

  public getActiveQuizzes(){
    return this.http.get(`${baseUrl}quiz/active`);
  }

  public getActiveQuizzesByCategory(category_id:any){
    return this.http.get(`${baseUrl}quiz/category/active/${category_id}`);
  }

}
