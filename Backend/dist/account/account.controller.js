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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const account_service_1 = require("./account.service");
let AccountController = class AccountController {
    constructor(accountService) {
        this.accountService = accountService;
    }
    async getServerBalance() {
        try {
            const result = await this.accountService.getServerAccountBalance();
            return Number(result);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 503);
        }
    }
};
__decorate([
    (0, common_1.Get)('server-balance'),
    (0, swagger_1.ApiOperation)({
        summary: 'Server account balance',
        description: 'Gets the server balance expressed in network tokens',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Server balance in network tokens',
        type: Number,
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'The server is not connected to a valid provider or server account is not set up',
        type: common_1.HttpException,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "getServerBalance", null);
AccountController = __decorate([
    (0, common_1.Controller)('account'),
    (0, swagger_1.ApiTags)('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map