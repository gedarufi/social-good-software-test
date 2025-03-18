import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Contact } from '../entity/contact.entity';

@Injectable()
export class CreateContactService {
  constructor(
    @InjectRepository(Contact)
    protected readonly repository: Repository<Contact>,
  ) {}

  async create(contact: Partial<Contact>): Promise<Contact> {
    return Promise.resolve(contact as Contact);
  }
}
