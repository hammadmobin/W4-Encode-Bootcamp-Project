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
exports.ContractService = void 0;
const common_1 = require("@nestjs/common");
const provider_service_1 = require("../shared/services/provider/provider.service");
const signer_service_1 = require("../shared/services/signer/signer.service");
const ethers_1 = require("ethers");
const TokenContract = require("../assets/contracts/Token.json");
let ContractService = class ContractService {
    constructor(providerService, signerService) {
        this.providerService = providerService;
        this.signerService = signerService;
        this.setupContractInstances();
    }
    setupContractInstances() {
        const contractAddress = process.env.TOKEN_CONTRACT_ADDRESS;
        if (!contractAddress || contractAddress.length === 0)
            return;
        this.contractPublicInstance = new ethers_1.ethers.Contract(contractAddress, TokenContract.abi, this.providerService.provider);
        this.contractSignedInstance = new ethers_1.ethers.Contract(contractAddress, TokenContract.abi, this.signerService.signer);
    }
    async tokenBalanceOf(address) {
        const balanceBN = await this.contractPublicInstance.balanceOf(address);
        const balance = ethers_1.ethers.utils.formatEther(balanceBN);
        return balance;
    }
    async mintTokens(address, amount) {
        const tx = await this.contractSignedInstance.mint(address, ethers_1.ethers.utils.parseEther(amount.toFixed(18)));
        return tx;
    }
    checkSignature(address, amount, signature) {
        const signatureObject = { address: address, amount: amount };
        const signatureMessage = JSON.stringify(signatureObject);
        const signerAddress = ethers_1.ethers.utils.verifyMessage(signatureMessage, signature);
        return signerAddress == address;
    }
};
ContractService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [provider_service_1.ProviderService,
        signer_service_1.SignerService])
], ContractService);
exports.ContractService = ContractService;
//# sourceMappingURL=contract.service.js.map