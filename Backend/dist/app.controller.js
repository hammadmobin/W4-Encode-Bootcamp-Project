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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const app_service_1 = require("./app.service");
const file_data_dto_1 = require("./dtos/file-data.dto");
const set_metadata_dto_1 = require("./dtos/set-metadata.dto");
const upload_ipfs_dto_1 = require("./dtos/upload-ipfs.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getAllData() {
        try {
            const result = this.appService.getAll();
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 503);
        }
    }
    async ipfsOnline() {
        try {
            return this.appService.isIpfsNodeOnline();
        }
        catch (error) {
            return error;
        }
    }
    async getData(id) {
        try {
            const result = this.appService.get(id);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 503);
        }
    }
    async getFile(res, id) {
        try {
            const fileData = this.appService.get(id).file;
            const fileStream = this.appService.getFileStream(fileData.storageName);
            res.set({
                'Content-Type': fileData.mimetype,
                'Content-Disposition': `attachment; filename="${fileData.fileName}"`,
            });
            return fileStream;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 503);
        }
    }
    async getFileIpfs(res, id) {
        try {
            const fileData = this.appService.get(id).file;
            const fileStream = await this.appService.getFromIpfs(id);
            res.set({
                'Content-Type': fileData.mimetype,
                'Content-Disposition': `attachment; filename="${fileData.fileName}"`,
            });
            return fileStream;
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException(error.message, 503);
        }
    }
    uploadFile(file) {
        const fileData = new file_data_dto_1.FileDataDto(file.originalname, file.mimetype, file.filename, file.size);
        const savedObj = this.appService.pushFile(fileData);
        return savedObj;
    }
    setMetadata(body) {
        const updatedObj = this.appService.setMetadata(body.id, body.metadata);
        return updatedObj;
    }
    sendFileIpfs(body) {
        const updatedObj = this.appService.saveToIpfs(body.id);
        return updatedObj;
    }
};
__decorate([
    (0, common_1.Get)(''),
    (0, swagger_1.ApiOperation)({
        summary: 'Database contents',
        description: 'Gets the Database contents of this server',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Database contents',
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'The server is not configured correctly',
        type: common_1.HttpException,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getAllData", null);
__decorate([
    (0, common_1.Get)('ipfs'),
    (0, swagger_1.ApiOperation)({
        summary: 'IPFS node connection',
        description: 'Returns true if the IPFS Node configured is running',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'IPFS Node connection',
        type: Boolean,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "ipfsOnline", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get element by id',
        description: 'Gets the element at the requested index',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Element',
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'The server is not configured correctly',
        type: common_1.HttpException,
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getData", null);
__decorate([
    (0, common_1.Get)('file/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get file of element by id from server storage',
        description: 'Gets the file of element at the requested index',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Element file',
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'The server is not configured correctly',
        type: common_1.HttpException,
    }),
    __param(0, (0, common_1.Response)({ passthrough: true })),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)('ipfs-get/:id'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get file of element by id from ipfs',
        description: 'Gets the file of element at the requested index',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Element file',
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'The server is not configured correctly',
        type: common_1.HttpException,
    }),
    __param(0, (0, common_1.Response)({ passthrough: true })),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getFileIpfs", null);
__decorate([
    (0, common_1.Post)('file'),
    (0, swagger_1.ApiOperation)({
        summary: 'Register file',
        description: 'Registers a file in the database',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'File registered',
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'Server Error',
        type: common_1.HttpException,
    }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Post)('metadata'),
    (0, swagger_1.ApiOperation)({
        summary: 'Register file metadata',
        description: 'Registers a metadata for a file',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Metadata registered',
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'Server Error',
        type: common_1.HttpException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [set_metadata_dto_1.SetMetadataDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "setMetadata", null);
__decorate([
    (0, common_1.Post)('ipfs-save'),
    (0, swagger_1.ApiOperation)({
        summary: 'Register file metadata',
        description: 'Registers a metadata for a file',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Metadata registered',
    }),
    (0, swagger_1.ApiResponse)({
        status: 503,
        description: 'Server Error',
        type: common_1.HttpException,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [upload_ipfs_dto_1.UploadIpfsDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "sendFileIpfs", null);
AppController = __decorate([
    (0, swagger_1.ApiTags)('file'),
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map