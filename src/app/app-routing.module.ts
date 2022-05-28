import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [
  { path: 'studentForm', component: StudentComponent},
  { path: 'teacherForm', component: TeacherComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
