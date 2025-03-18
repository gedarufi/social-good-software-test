import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {
  IsNotEmpty,
  Length,
  Matches,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
  IsBoolean,
  IsDate,
} from 'class-validator';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn('uuid')
  contactId: string;

  @Column({ type: 'varchar', length: 80 })
  @IsNotEmpty({ message: 'First name is required' })
  @Length(1, 80, { message: 'First name must be between 1 and 50 characters' })
  @Matches(/^[a-zA-ZÀ-ÿ\s\-']+$/, {
    message:
      'First name can only contain letters, spaces, hyphens, and apostrophes',
  })
  firstName: string;

  @Column({ type: 'varchar', length: 80 })
  @IsNotEmpty({ message: 'Last name is required' })
  @Length(1, 80, { message: 'Last name must be between 1 and 50 characters' })
  @Matches(/^[a-zA-ZÀ-ÿ\s\-']+$/, {
    message:
      'Last name can only contain letters, spaces, hyphens, and apostrophes',
  })
  lastName: string;

  // Email Object
  @Column({ type: 'varchar', length: 255 })
  @IsEmail({}, { message: 'Invalid email address' })
  emailAddress: string;

  @Column()
  @IsDate()
  emailAddressUpdatedAt: Date;

  // Custom fields
  @Column()
  @IsBoolean()
  @IsOptional()
  todayVisitorAttribute: boolean;

  @Column()
  @IsDate()
  @IsOptional()
  todayVisitorAttributeUpdatedAt: Date;

  // Address Object
  @Column({ type: 'varchar', length: 100, nullable: true })
  @IsOptional()
  @Length(1, 100, {
    message: 'Address line 1 must be between 1 and 100 characters',
  })
  addressLine1: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  @IsOptional()
  @Length(1, 100, {
    message: 'Address line 2 must be between 1 and 100 characters',
  })
  addressLine2: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  @IsOptional()
  @Length(1, 50, { message: 'City must be between 1 and 50 characters' })
  addressCity: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  @IsOptional()
  @Matches(/^[A-Z0-9\s-]{3,10}$/, {
    message: 'Invalid postal code format',
  })
  addressPostalCode: string;

  @Column({ type: 'varchar', length: 2, nullable: true })
  @IsOptional()
  @Length(2, 2, { message: 'State abbreviation must be exactly 2 characters' })
  @Matches(/^[A-Z]{2}$/, {
    message: 'State abbreviation must be 2 uppercase letters',
  })
  addressStateAbreviation: string;

  @Column({ type: 'varchar', length: 2, nullable: true })
  @IsOptional()
  @Length(2, 2, {
    message: 'Country abbreviation must be exactly 2 characters',
  })
  @Matches(/^[A-Z]{2}$/, {
    message: 'Country abbreviation must be 2 uppercase letters',
  })
  addressCountryAbrevation: string;

  @Column()
  @IsDate()
  @IsOptional()
  addressUpdatedAt: Date;

  // Phone Number Object
  @Column({ type: 'varchar', length: 20, nullable: true })
  @IsOptional()
  @IsPhoneNumber(undefined, { message: 'Invalid phone number format' })
  phoneNumber: string;

  @Column()
  @IsOptional()
  @IsDate()
  phoneNumberUpdatedAt: Date;
}
