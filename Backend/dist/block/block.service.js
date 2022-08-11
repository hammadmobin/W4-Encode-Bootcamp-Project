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
exports.BlockService = void 0;
const common_1 = require("@nestjs/common");
const provider_service_1 = require("../shared/services/provider/provider.service");
let BlockService = class BlockService {
    constructor(providerService) {
        this.providerService = providerService;
    }
    async getLastBlock() {
        return await this.providerService.getBlockData();
    }
    async getBlockByHash(hash) {
        return await this.providerService.getBlockData(hash);
    }
    async getTransactionReceipt(hash) {
        return await this.providerService.getTransactionReceipt(hash);
    }
};
BlockService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [provider_service_1.ProviderService])
], BlockService);
exports.BlockService = BlockService;
//# sourceMappingURL=block.service.js.map