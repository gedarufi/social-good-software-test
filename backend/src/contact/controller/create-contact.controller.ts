import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateContactService } from '../service/create-contact.service';
import { Contact } from '../entity/contact.entity';

@Controller('contact')
export class CreateContactController {
  constructor(@Inject() protected createService: CreateContactService) {}

  @Post()
  create(@Body() contact: Partial<Contact>) {
    return this.createService.create(contact);
  }
}
