import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Contact } from '../entity/contact.entity';

@Injectable()
export class GetAllContactService {
  constructor(
    @InjectRepository(Contact)
    protected readonly repository: Repository<Contact>,
  ) {}

  async getAll(): Promise<Contact[]> {
    return Promise.resolve([]);
  }
}
