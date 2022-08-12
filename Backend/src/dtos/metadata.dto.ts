import { ApiProperty } from '@nestjs/swagger';

export class MetadataDto {
  @ApiProperty({
    required: true,
    description: 'Name of the Summer NFT',
    examples: ['Foo', 'Bar', 'Summer Vacation NFT'],
  })
  name: string;
  @ApiProperty({
    required: false,
    description: 'Description for the NFT',
  })
  description?: string;
  @ApiProperty({
    required: false,
    description: 'Author of this NFT',
  })
  author?: string;
  @ApiProperty({
    required: false,
    description: 'Timestamp of creation date of this NFT',
  })
  timestamp?: number;
}
