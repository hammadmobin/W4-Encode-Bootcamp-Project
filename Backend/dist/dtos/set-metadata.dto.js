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
exports.SetMetadataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const metadata_dto_1 = require("./metadata.dto");
class SetMetadataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Id of the file',
    }),
    __metadata("design:type", Number)
], SetMetadataDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'File metadata',
        type: metadata_dto_1.MetadataDto
    }),
    __metadata("design:type", metadata_dto_1.MetadataDto)
], SetMetadataDto.prototype, "metadata", void 0);
exports.SetMetadataDto = SetMetadataDto;
//# sourceMappingURL=set-metadata.dto.js.map