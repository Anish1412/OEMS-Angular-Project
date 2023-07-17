import { Injectable } from '@angular/core';
import { HttpRequest,HttpHandler,HttpEvent,HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../loginService/login.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {

  constructor(private http:LoginService) {}

  
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.http.getToken();
    request = this.addToken(request,token);

    return next.handle(request);
  }

  addToken(request: HttpRequest<unknown>,token:any){
    return request.clone({
      setHeaders:
      {
        // If gets error of not going token then, go in "Headers" in that check authorization's value
        // For e.g. Authorization : Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY3Njc0ODg5Nywia 
        // According to it, set value below in "Authorization" key
        Authorization: `Bearer ${token}`
      }
    })
  }
  
}
