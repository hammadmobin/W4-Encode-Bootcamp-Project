import { ContractService } from './contract.service';
import { MintRequestDto } from './dtos/mint-request.dto';
export declare class ContractController {
    private readonly contractService;
    constructor(contractService: ContractService);
    getTokenBalance(address: string): Promise<number>;
    mintToken(mintRequestDto: MintRequestDto): Promise<any>;
}
