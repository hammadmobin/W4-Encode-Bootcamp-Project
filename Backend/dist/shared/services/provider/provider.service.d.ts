import { ethers } from 'ethers';
export declare class ProviderService {
    provider: ethers.providers.BaseProvider;
    constructor();
    setupProvider(): void;
    getBalance(address: string): Promise<string>;
    getBlockData(blockHashOrTag?: string): Promise<ethers.providers.Block>;
    getTransactionReceipt(hash: string): Promise<ethers.providers.TransactionReceipt>;
}
