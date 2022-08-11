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
exports.ContractController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const contract_service_1 = require("./contract.service");
const mint_request_dto_1 = require("./dtos/mint-request.dto");
let ContractController = class ContractController {
    constructor(contractService) {
        this.contractService = contractService;
    }
    async getTokenBalance(address) {
        try {
            const result = await this.contractService.tokenBalanceOf(address);
            return Number(result);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 503);
        }
    }
    async mintToken(mintRequestDto) {
        const signature = mintRequestDto.signature;
        if (!signature || signature.length == 0)
            throw new common_1.HttpException('Missing signature', 401);
        let signatureValid = false;
        try {
            signatureValid = this.contractService.checkSignature(mintRequestDto.address, mintRequestDto.amount, signature);
        }
        catch (error) {
            throw new common_1.HttpException("Invalid signature: " + error.message, 500);
        }
        if (!signatureValid)
            throw new common_1.HttpException('Signature does not match with the requested address', 403);
        try {
            const result = await this.contractService.mintTokens(mintRequestDto.address, mintRequestDto.amount);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 503);
        }
    }
};
__decorate([
    (0, common_1.Get)('token-balance/:address'),
    (0, swagger_1.ApiOperation)({
        summary: 'Token balance',
        description: 'Gets the token balance of the provided address',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Token balance',
        type: Number,
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'The server is not connected to a valid provider',
        type: common_1.HttpException,
    }),
    __param(0, (0, common_1.Param)('address')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "getTokenBalance", null);
__decorate([
    (0, common_1.Post)('mint-token'),
    (0, swagger_1.ApiOperation)({
        summary: 'Mint Token',
        description: 'Requests the server to mint a given amount of tokens to a provided address',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Token balance',
        type: Number,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Missing signature',
        type: common_1.HttpException,
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Wrong signature',
        type: common_1.HttpException,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Invalid signature',
        type: common_1.HttpException,
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'Server Error',
        type: common_1.HttpException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [mint_request_dto_1.MintRequestDto]),
    __metadata("design:returntype", Promise)
], ContractController.prototype, "mintToken", null);
ContractController = __decorate([
    (0, common_1.Controller)('contract'),
    (0, swagger_1.ApiTags)('contract'),
    __metadata("design:paramtypes", [contract_service_1.ContractService])
], ContractController);
exports.ContractController = ContractController;
//# sourceMappingURL=contract.controller.js.map