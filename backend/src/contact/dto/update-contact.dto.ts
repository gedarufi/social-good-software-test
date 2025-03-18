import { PartialType } from '@nestjs/mapped-types';
import { Contact } from '../entity/contact.entity';

export class UpdateContactDTO extends PartialType(Contact) {}
