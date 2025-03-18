import { Controller, Post } from '@nestjs/common';

@Controller('contact')
export class ImportContactController {
  @Post('import')
  import() {
    return undefined;
  }
}
