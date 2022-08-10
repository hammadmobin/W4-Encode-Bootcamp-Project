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
exports.MetadataDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class MetadataDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Name of this object',
        examples: ['Foo', 'Bar', 'Steven'],
    }),
    __metadata("design:type", String)
], MetadataDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Description for this object',
    }),
    __metadata("design:type", String)
], MetadataDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Author of this object',
    }),
    __metadata("design:type", String)
], MetadataDto.prototype, "author", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Timestamp of creation date of this object',
    }),
    __metadata("design:type", Number)
], MetadataDto.prototype, "timestamp", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Given type for this object',
        examples: ['Document', 'Meme', 'Dolphin', 'Undefined'],
    }),
    __metadata("design:type", String)
], MetadataDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Given class for this object',
        examples: [
            'Legendary',
            'Common',
            'Confidential',
            'Round',
            'Large',
            'Warrior',
            'Hyena',
            'Steven',
        ],
    }),
    __metadata("design:type", String)
], MetadataDto.prototype, "class", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Given score for this object',
        examples: [0, -1, 42, 9876543210],
    }),
    __metadata("design:type", Number)
], MetadataDto.prototype, "score", void 0);
exports.MetadataDto = MetadataDto;
//# sourceMappingURL=metadata.dto.js.map