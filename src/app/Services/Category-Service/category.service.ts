import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  public addCategory(data:any){
    return this.http.post(`${baseUrl}category/`,data);
  }

  public getAllCategory(){
    return this.http.get(`${baseUrl}category/`)
  }

  public getCategoryById(id:number){
    return this.http.get(`${baseUrl}category/${id}`);
  }

  public updateCategory(data:any){
    return this.http.put(`${baseUrl}category/`,data);
  }

  public deleteCategoryById(id:number){
    return this.http.delete(`${baseUrl}category/${id}`);
  }
}
