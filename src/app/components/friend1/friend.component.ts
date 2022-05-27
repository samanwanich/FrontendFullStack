import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { PageService } from 'src/app/share/page.service';


@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendStudentComponent implements OnInit {
  studentForm !: FormGroup;
  student: Observable<any> | undefined
  sid:string = '6204062630556';
  term:string = '2564-2';

  constructor(private fb: FormBuilder, private fservice: PageService) { }

  ngOnInit(): void {
    // should use reactive form
    this.studentForm = this.fb.group ({
      term: ['2564-2'],
    });

    this.student = this.fservice.getStudent(this.sid,this.term);

  }

  onSubmit(f:FormGroup): void {
    this.term = f.get('term')?.value;
    this.student = this.fservice.getStudent(this.sid,this.term);
  }

  getStudents(id:string ,term:string) {
    this.student = this.fservice.getStudent(id,term);
  }

} //end of class
