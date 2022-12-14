"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const shared_module_1 = require("./shared/shared.module");
const block_module_1 = require("./block/block.module");
const account_module_1 = require("./account/account.module");
const wallet_module_1 = require("./wallet/wallet.module");
const contract_module_1 = require("./contract/contract.module");
const platform_express_1 = require("@nestjs/platform-express");
const ipfs_module_1 = require("./ipfs/ipfs.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            shared_module_1.SharedModule,
            block_module_1.BlockModule,
            account_module_1.AccountModule,
            wallet_module_1.WalletModule,
            contract_module_1.ContractModule,
            platform_express_1.MulterModule.register({
                dest: '../upload',
            }),
            ipfs_module_1.IpfsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map