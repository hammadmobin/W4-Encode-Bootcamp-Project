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
exports.ProviderService = void 0;
const common_1 = require("@nestjs/common");
const ethers_1 = require("ethers");
let ProviderService = class ProviderService {
    constructor() {
        this.setupProvider();
    }
    setupProvider() {
        const networkName = process.env.PROVIDER_NETWORK;
        if (!networkName || networkName.length === 0)
            return;
        const infuraOptions = process.env.PROVIDER_OPTIONS_INFURA_PROJECT_ID
            ? process.env.PROVIDER_OPTIONS_INFURA_PROJECT_SECRET
                ? {
                    projectId: process.env.PROVIDER_OPTIONS_INFURA_PROJECT_ID,
                    projectSecret: process.env.PROVIDER_OPTIONS_INFURA_PROJECT_SECRET,
                }
                : process.env.PROVIDER_OPTIONS_INFURA_PROJECT_ID
            : '';
        const options = {
            alchemy: process.env.PROVIDER_OPTIONS_ALCHEMY_TOKEN,
            infura: infuraOptions,
        };
        const provider = ethers_1.ethers.providers.getDefaultProvider(networkName, options);
        this.provider = provider;
    }
    async getBalance(address) {
        const balanceBN = await this.provider.getBalance(address);
        const balance = ethers_1.ethers.utils.formatEther(balanceBN);
        return balance;
    }
    async getBlockData(blockHashOrTag = 'latest') {
        const block = await this.provider.getBlock(blockHashOrTag);
        return block;
    }
    async getTransactionReceipt(hash) {
        const tx = await this.provider.getTransaction(hash);
        const receipt = await tx.wait();
        return receipt;
    }
};
ProviderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ProviderService);
exports.ProviderService = ProviderService;
//# sourceMappingURL=provider.service.js.map