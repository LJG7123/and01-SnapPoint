import { ApiProperty } from '@nestjs/swagger';
import { File } from '@prisma/client';

export class FileDto {
  @ApiProperty({ description: '파일의 고유 식별자를 나타냅니다.' })
  uuid: string;

  @ApiProperty({ description: '파일에 접근 가능한 URL 주소입니다.' })
  url: string;

  @ApiProperty({ description: '파일의 MIME 타입을 나타냅니다.' })
  mimeType: string;

  static of(file: File): FileDto {
    return {
      uuid: file.uuid,
      url: file.url,
      mimeType: file.mimeType,
    };
  }
}
