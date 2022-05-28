import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  dataUrl = 'http://localhost:3000/register/';

  constructor(private httpClient: HttpClient) { }

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
