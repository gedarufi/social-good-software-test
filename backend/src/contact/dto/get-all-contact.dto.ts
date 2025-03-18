import { PartialType } from '@nestjs/mapped-types';
import { Contact } from '../entity/contact.entity';

export class GetAllContactDTO extends PartialType(Contact) {}
