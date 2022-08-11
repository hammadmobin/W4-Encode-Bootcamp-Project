import { ethers } from 'ethers';
import { ProviderService } from '../provider/provider.service';
import { WalletService } from '../wallet/wallet.service';
export declare class SignerService {
    private walletService;
    private providerService;
    signer: ethers.Wallet;
    constructor(walletService: WalletService, providerService: ProviderService);
    setupSigner(): void;
}
