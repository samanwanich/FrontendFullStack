"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const register_service_1 = require("./register.service");
const common_1 = require("@nestjs/common");
let RegisterController = class RegisterController {
    constructor(registerService) {
        this.registerService = registerService;
    }
    async student(sid, term) {
        return this.registerService.student(sid, term);
    }
    async teacher(tid, term) {
        return this.registerService.teacher(tid, term);
    }
    async course(cid, term, sec) {
        return this.registerService.course(cid, term, sec);
    }
};
__decorate([
    (0, common_1.Get)('student/:sid/:term'),
    __param(0, (0, common_1.Param)('sid')),
    __param(1, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "student", null);
__decorate([
    (0, common_1.Get)('teacher/:tid/:term'),
    __param(0, (0, common_1.Param)('tid')),
    __param(1, (0, common_1.Param)('term')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "teacher", null);
__decorate([
    (0, common_1.Get)('course/:cid/:term/:sec'),
    __param(0, (0, common_1.Param)('cid')),
    __param(1, (0, common_1.Param)('term')),
    __param(2, (0, common_1.Param)('sec')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], RegisterController.prototype, "course", null);
RegisterController = __decorate([
    (0, common_1.Controller)('register'),
    __metadata("design:paramtypes", [register_service_1.RegisterService])
], RegisterController);
exports.RegisterController = RegisterController;
//# sourceMappingURL=register.controller.js.map