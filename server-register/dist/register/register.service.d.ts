export declare class RegisterService {
    entityManager: import("typeorm").EntityManager;
    student(sid: string, term: string): Promise<any>;
    teacher(tid: string, term: string): Promise<any>;
    course(cid: string, term: string, sec: string): Promise<any>;
}
