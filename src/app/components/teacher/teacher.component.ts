import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PageService } from 'src/app/share/page.service';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teacherForm !: FormGroup;
  course: Observable<any> | undefined
  tid:string = 't01';
  term:string = '2564-2';
  sec !: string;
  default:boolean = true;

  constructor(private fb: FormBuilder, private fservice: PageService) { }

  ngOnInit(): void {
    // should use reactive form
    this.teacherForm = this.fb.group ({
      term: ['2564-2'],
    });

    this.course = this.fservice.getCourse(this.tid, this.term);
  }

  onSubmit(f:FormGroup): void {
    this.term = f.get('term')?.value;
    this.default = true;
    this.course = this.fservice.getCourse(this.tid,this.term);
  }

  getDetails(id:string ,term:string, sec:string) {
    this.default = false;
    this.course = this.fservice.getStudentCourse(id, term, sec);
  }
}
