import { ProviderService } from 'src/shared/services/provider/provider.service';
import { SignerService } from 'src/shared/services/signer/signer.service';
import { ethers } from 'ethers';
export declare class ContractService {
    private providerService;
    private signerService;
    contractPublicInstance: ethers.Contract;
    contractSignedInstance: ethers.Contract;
    constructor(providerService: ProviderService, signerService: SignerService);
    setupContractInstances(): void;
    tokenBalanceOf(address: string): Promise<string>;
    mintTokens(address: string, amount: number): Promise<any>;
    checkSignature(address: string, amount: number, signature: string): boolean;
}
