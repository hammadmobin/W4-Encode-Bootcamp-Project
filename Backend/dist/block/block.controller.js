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
exports.BlockController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const block_service_1 = require("./block.service");
let BlockController = class BlockController {
    constructor(blockService) {
        this.blockService = blockService;
    }
    async getLastBlock() {
        try {
            const result = await this.blockService.getLastBlock();
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 503);
        }
    }
    async getBlockByHash(hash) {
        let result;
        try {
            result = await this.blockService.getBlockByHash(hash);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 503);
        }
        if (!result)
            throw new common_1.HttpException('Block not found', 404);
        return result;
    }
    async getTransactionReceipt(hash) {
        let result;
        try {
            result = await this.blockService.getTransactionReceipt(hash);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 503);
        }
        if (!result)
            throw new common_1.HttpException('Transaction not found', 404);
        return result;
    }
};
__decorate([
    (0, common_1.Get)('block'),
    (0, swagger_1.ApiOperation)({
        summary: 'Last Block',
        description: 'Gets the last block from the provider',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Block Data',
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'The server is not connected to a valid provider',
        type: common_1.HttpException,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BlockController.prototype, "getLastBlock", null);
__decorate([
    (0, common_1.Get)('block/:hash'),
    (0, swagger_1.ApiOperation)({
        summary: 'Block by hash',
        description: 'Search for a block that matches the provided hash',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Block Data',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Block not found',
        type: common_1.HttpException,
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'The server is not connected to a valid provider',
        type: common_1.HttpException,
    }),
    __param(0, (0, common_1.Param)('hash')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlockController.prototype, "getBlockByHash", null);
__decorate([
    (0, common_1.Get)('transaction/:hash'),
    (0, swagger_1.ApiOperation)({
        summary: 'Transaction by hash',
        description: 'Search for a transaction that matches the provided hash and awaits for the receipt',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Transaction Data',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Transaction not found',
        type: common_1.HttpException,
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'The server is not connected to a valid provider',
        type: common_1.HttpException,
    }),
    __param(0, (0, common_1.Param)('hash')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BlockController.prototype, "getTransactionReceipt", null);
BlockController = __decorate([
    (0, common_1.Controller)('block'),
    (0, swagger_1.ApiTags)('block'),
    __metadata("design:paramtypes", [block_service_1.BlockService])
], BlockController);
exports.BlockController = BlockController;
//# sourceMappingURL=block.controller.js.map