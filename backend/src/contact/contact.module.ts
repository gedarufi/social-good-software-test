import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Contact } from './entity/contact.entity';

import { CreateContactService } from './service/create-contact.service';
import { GetAllContactService } from './service/get-all-contact.service';
import { ImportContactService } from './service/import-contact.service';
import { UpdateContactService } from './service/update-contact.service';

import { CreateContactController } from './controller/create-contact.controller';
import { GetAllContactController } from './controller/get-all-contact.controller';
import { ImportContactController } from './controller/import-contact.controller';
import { UpdateContactController } from './controller/update-contact.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  controllers: [
    CreateContactController,
    GetAllContactController,
    ImportContactController,
    UpdateContactController,
  ],
  providers: [
    CreateContactService,
    GetAllContactService,
    ImportContactService,
    UpdateContactService,
  ],
  exports: [
    CreateContactService,
    GetAllContactService,
    ImportContactService,
    UpdateContactService,
  ],
})
export class ContactModule {}
