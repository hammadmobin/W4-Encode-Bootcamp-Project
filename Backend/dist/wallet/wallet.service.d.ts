import { WalletService } from 'src/shared/services/wallet/wallet.service';
export declare class WalletResourceService {
    private walletService;
    constructor(walletService: WalletService);
    walletAddress(): string;
}
