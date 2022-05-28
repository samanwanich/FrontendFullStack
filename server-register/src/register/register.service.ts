import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';

@Injectable()
export class RegisterService {
  entityManager = getManager();

  async student(sid: string, term: string) {
    return this.entityManager.query(
      'SELECT course_regis.course_id, course_list.course_name, course_regis.section, course_regis.term FROM `student_list` JOIN course_regis ON student_list.std_id = course_regis.std_id JOIN course_list ON course_list.course_id = course_regis.course_id WHERE student_list.std_id = ? AND course_regis.term = ?',
      [sid, term],
    );
  }

  async teacher(tid: string, term: string) {
    return this.entityManager.query(
      'SELECT course_list.course_id, course_list.course_name, course_teacher.section, course_teacher.term FROM teacher_list JOIN course_teacher ON teacher_list.t_id = course_teacher.t_id JOIN course_list ON course_teacher.course_id = course_list.course_id WHERE teacher_list.t_id = ? AND course_teacher.term = ?',
      [tid, term],
    );
  }

  async course(cid: string, term: string, sec: string) {
    return this.entityManager.query(
      'SELECT course_list.course_id, course_list.course_name, course_regis.section, course_regis.term, student_list.std_id, student_list.std_name FROM course_regis JOIN student_list ON course_regis.std_id = student_list.std_id JOIN course_list ON course_regis.course_id = course_list.course_id WHERE course_regis.course_id = ? AND course_regis.term = ? AND course_regis.section = ?',
      [cid, term, sec],
    );
  }
}
