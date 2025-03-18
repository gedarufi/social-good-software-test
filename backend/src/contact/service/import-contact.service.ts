import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Contact } from '../entity/contact.entity';

@Injectable()
export class ImportContactService {
  constructor(
    @InjectRepository(Contact)
    protected readonly repository: Repository<Contact>,
  ) {}

  async update(contactId: string, contact: Partial<Contact>): Promise<Contact> {
    return Promise.resolve(contact as Contact);
  }
}
