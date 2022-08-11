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
exports.WalletController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const wallet_service_1 = require("./wallet.service");
let WalletController = class WalletController {
    constructor(walletService) {
        this.walletService = walletService;
    }
    async getServerWallet() {
        try {
            const result = this.walletService.walletAddress();
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 503);
        }
    }
};
__decorate([
    (0, common_1.Get)('server-wallet'),
    (0, swagger_1.ApiOperation)({
        summary: 'Server account wallet address',
        description: 'Gets the server account wallet address from the configured environment',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Server account address',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'The account is not set up',
        type: common_1.HttpException,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getServerWallet", null);
WalletController = __decorate([
    (0, common_1.Controller)('wallet'),
    (0, swagger_1.ApiTags)('wallet'),
    __metadata("design:paramtypes", [wallet_service_1.WalletResourceService])
], WalletController);
exports.WalletController = WalletController;
//# sourceMappingURL=wallet.controller.js.map