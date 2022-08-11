import { ProviderService } from 'src/shared/services/provider/provider.service';
import { WalletService } from 'src/shared/services/wallet/wallet.service';
export declare class AccountService {
    private providerService;
    private walletService;
    constructor(providerService: ProviderService, walletService: WalletService);
    getServerAccountBalance(): Promise<string>;
}
