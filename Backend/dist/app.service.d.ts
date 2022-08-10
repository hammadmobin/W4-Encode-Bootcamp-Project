import { StreamableFile } from '@nestjs/common';
import { JsonDB } from 'node-json-db';
import { FileDataDto } from './dtos/file-data.dto';
import { MetadataDto } from './dtos/metadata.dto';
import { IPFSHTTPClient } from 'ipfs-http-client/types/src/types';
export declare class AppService {
    db: JsonDB;
    lastId: number;
    ipfsClient: IPFSHTTPClient;
    constructor();
    pushFile(file: FileDataDto): number;
    setMetadata(fileId: number, metadata: MetadataDto): any;
    getAll(): any;
    get(fileId: number): any;
    getFileStream(filename: string): StreamableFile;
    isIpfsNodeOnline(): any;
    saveToIpfs(fileId: number): Promise<any>;
    getFromIpfs(fileId: number): Promise<StreamableFile>;
}
