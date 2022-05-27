import { Injectable } from '@angular/core';
//import { Mockfriend } from './mockfriend';

import { Observable, BehaviorSubject, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  dataUrl = 'http://localhost:3000/register/';

  constructor(private httpClient: HttpClient) { }


  getFriends(){
    return this.httpClient.get('http://localhost:3000/register/student/6204062630556/2564-1');
  }

  getStudent(id:string, term:string){
    return this.httpClient.get(this.dataUrl + 'student/' + id +'/' + term);
  }

  getCourse(id:string, term:string  ){
    return this.httpClient.get(this.dataUrl + 'teacher/' + id +'/' + term);
  }

  getStudentCourse(id:string, term:string, sec:string  ){
    return this.httpClient.get(this.dataUrl + 'course/' + id +'/' + term + '/' + sec);
  }
}
