import { Controller, Get, Inject } from '@nestjs/common';
import { GetAllContactService } from '../service/get-all-contact.service';

@Controller('contact')
export class GetAllContactController {
  constructor(@Inject() protected getAllService: GetAllContactService) {}

  @Get()
  getAll() {
    return this.getAllService.getAll();
  }
}
