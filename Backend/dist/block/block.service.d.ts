import { ProviderService } from 'src/shared/services/provider/provider.service';
export declare class BlockService {
    private providerService;
    constructor(providerService: ProviderService);
    getLastBlock(): Promise<import("@ethersproject/abstract-provider").Block>;
    getBlockByHash(hash: string): Promise<import("@ethersproject/abstract-provider").Block>;
    getTransactionReceipt(hash: string): Promise<import("@ethersproject/abstract-provider").TransactionReceipt>;
}
