/// <reference types="multer" />
import { AppService } from './app.service';
import { SetMetadataDto } from './dtos/set-metadata.dto';
import { UploadIpfsDto } from './dtos/upload-ipfs.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getAllData(): Promise<any>;
    ipfsOnline(): Promise<any>;
    getData(id: number): Promise<any>;
    getFile(res: any, id: number): Promise<import("@nestjs/common").StreamableFile>;
    getFileIpfs(res: any, id: number): Promise<import("@nestjs/common").StreamableFile>;
    uploadFile(file: Express.Multer.File): number;
    setMetadata(body: SetMetadataDto): any;
    sendFileIpfs(body: UploadIpfsDto): Promise<any>;
}
