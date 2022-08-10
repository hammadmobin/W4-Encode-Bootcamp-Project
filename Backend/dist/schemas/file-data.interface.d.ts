import { FileDataDto } from 'src/dtos/file-data.dto';
import { IpfsDataDto } from 'src/dtos/ipfs-data.dto';
import { MetadataDto } from 'src/dtos/metadata.dto';
export declare class FileData {
    file?: FileDataDto;
    metadata?: MetadataDto;
    ipfs?: IpfsDataDto;
    constructor(file?: FileDataDto, metadata?: MetadataDto, ipfs?: IpfsDataDto);
}
