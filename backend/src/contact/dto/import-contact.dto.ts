import { PartialType } from '@nestjs/mapped-types';
import { Contact } from '../entity/contact.entity';

export class ImportContactDTO extends PartialType(Contact) {}
