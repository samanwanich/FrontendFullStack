import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { StudentComponent } from './components/student/student.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent ,
    StudentComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
