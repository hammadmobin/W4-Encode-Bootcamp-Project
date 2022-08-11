import { ethers } from 'ethers';
export declare class WalletService {
    wallet: ethers.Wallet;
    constructor();
    setupWallet(): void;
    walletAddress(): string;
}
