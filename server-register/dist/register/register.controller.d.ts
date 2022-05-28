import { RegisterService } from './register.service';
export declare class RegisterController {
    private registerService;
    constructor(registerService: RegisterService);
    student(sid: string, term: string): Promise<any>;
    teacher(tid: string, term: string): Promise<any>;
    course(cid: string, term: string, sec: string): Promise<any>;
}
