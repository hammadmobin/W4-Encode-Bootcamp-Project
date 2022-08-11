import { AccountService } from './account.service';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    getServerBalance(): Promise<number>;
}
