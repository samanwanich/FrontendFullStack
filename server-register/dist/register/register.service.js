"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let RegisterService = class RegisterService {
    constructor() {
        this.entityManager = (0, typeorm_1.getManager)();
    }
    async student(sid, term) {
        return this.entityManager.query('SELECT course_regis.course_id, course_list.course_name, course_regis.section, course_regis.term FROM `student_list` JOIN course_regis ON student_list.std_id = course_regis.std_id JOIN course_list ON course_list.course_id = course_regis.course_id WHERE student_list.std_id = ? AND course_regis.term = ?', [sid, term]);
    }
    async teacher(tid, term) {
        return this.entityManager.query('SELECT course_list.course_id, course_list.course_name, course_teacher.section, course_teacher.term FROM teacher_list JOIN course_teacher ON teacher_list.t_id = course_teacher.t_id JOIN course_list ON course_teacher.course_id = course_list.course_id WHERE teacher_list.t_id = ? AND course_teacher.term = ?', [tid, term]);
    }
    async course(cid, term, sec) {
        return this.entityManager.query('SELECT course_list.course_id, course_list.course_name, course_regis.section, course_regis.term, student_list.std_id, student_list.std_name FROM course_regis JOIN student_list ON course_regis.std_id = student_list.std_id JOIN course_list ON course_regis.course_id = course_list.course_id WHERE course_regis.course_id = ? AND course_regis.term = ? AND course_regis.section = ?', [cid, term, sec]);
    }
};
RegisterService = __decorate([
    (0, common_1.Injectable)()
], RegisterService);
exports.RegisterService = RegisterService;
//# sourceMappingURL=register.service.js.map