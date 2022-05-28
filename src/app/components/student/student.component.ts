import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PageService } from 'src/app/share/page.service';


@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentForm !: FormGroup;
  student: Observable<any> | undefined
  sid:string = '6204062630556';
  term:string = '2564-2';

  constructor(private fb: FormBuilder, private fservice: PageService) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group ({
      term: ['2564-2'],
    });

    this.student = this.fservice.getStudent(this.sid,this.term);

  }

  onSubmit(f:FormGroup): void {
    this.term = f.get('term')?.value;
    this.student = this.fservice.getStudent(this.sid,this.term);
  }

}
