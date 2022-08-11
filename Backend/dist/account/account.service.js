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
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const provider_service_1 = require("../shared/services/provider/provider.service");
const wallet_service_1 = require("../shared/services/wallet/wallet.service");
let AccountService = class AccountService {
    constructor(providerService, walletService) {
        this.providerService = providerService;
        this.walletService = walletService;
    }
    async getServerAccountBalance() {
        const serverAddress = this.walletService.walletAddress();
        const serverWalletBalance = await this.providerService.getBalance(serverAddress);
        return serverWalletBalance;
    }
};
AccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [provider_service_1.ProviderService,
        wallet_service_1.WalletService])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map