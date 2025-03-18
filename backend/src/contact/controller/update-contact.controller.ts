import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { UpdateContactService } from '../service/update-contact.service';
import { Contact } from '../entity/contact.entity';

@Controller('contact')
export class UpdateContactController {
  constructor(@Inject() protected updateService: UpdateContactService) {}

  @Put(':contactId')
  update(
    @Param('contactId') contactId: string,
    @Body() contact: Partial<Contact>,
  ) {
    return this.updateService.update(contactId, contact);
  }
}
