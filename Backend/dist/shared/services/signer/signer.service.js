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
exports.SignerService = void 0;
const common_1 = require("@nestjs/common");
const provider_service_1 = require("../provider/provider.service");
const wallet_service_1 = require("../wallet/wallet.service");
let SignerService = class SignerService {
    constructor(walletService, providerService) {
        this.walletService = walletService;
        this.providerService = providerService;
        this.setupSigner();
    }
    setupSigner() {
        if (!this.walletService.wallet || !this.providerService.provider)
            return;
        this.signer = this.walletService.wallet.connect(this.providerService.provider);
    }
};
SignerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [wallet_service_1.WalletService,
        provider_service_1.ProviderService])
], SignerService);
exports.SignerService = SignerService;
//# sourceMappingURL=signer.service.js.map