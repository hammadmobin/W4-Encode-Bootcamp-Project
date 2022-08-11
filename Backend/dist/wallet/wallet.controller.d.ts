import { WalletResourceService } from './wallet.service';
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletResourceService);
    getServerWallet(): Promise<string>;
}
