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
exports.MintRequestDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class MintRequestDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Address that will receive the tokens',
        example: '0x74121B1461631a021Dd36528baeBeCB45e61552f',
        minLength: 42,
        maxLength: 42,
    }),
    __metadata("design:type", String)
], MintRequestDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Amount of tokens to be minted',
        example: 42,
        minimum: 0.000000000000000001,
    }),
    __metadata("design:type", Number)
], MintRequestDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Signature payload',
    }),
    __metadata("design:type", String)
], MintRequestDto.prototype, "signature", void 0);
exports.MintRequestDto = MintRequestDto;
//# sourceMappingURL=mint-request.dto.js.map