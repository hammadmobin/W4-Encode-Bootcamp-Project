import { Block } from '@ethersproject/abstract-provider';
import { TransactionReceipt } from '@ethersproject/abstract-provider';
import { BlockService } from './block.service';
export declare class BlockController {
    private readonly blockService;
    constructor(blockService: BlockService);
    getLastBlock(): Promise<Block>;
    getBlockByHash(hash: string): Promise<Block>;
    getTransactionReceipt(hash: string): Promise<TransactionReceipt>;
}
