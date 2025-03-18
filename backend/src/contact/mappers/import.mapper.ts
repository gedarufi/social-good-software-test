import { ConstantContactDTO } from '../dto/constant-contact.dto';
import { Contact } from '../entity/contact.entity';

export class ImportMapper {
  /**
   * Maps ConstantContactDTO to Contact entity
   */
  public static toEntity(dto: ConstantContactDTO): Contact {
    const contact: Contact = new Contact();

    contact.contactId = dto.contact_id;
    contact.emailAddress = dto.email_address.address;
    contact.firstName = dto.first_name;
    contact.lastName = dto.last_name;

    if (dto.street_addresses && dto.street_addresses.length > 0) {
      const address = dto.street_addresses[0];
      const [line1, line2] = address.street.split('$|$');
      contact.addressLine1 = line1;
      contact.addressLine2 = line2;
      contact.addressCity = address.city;
      contact.addressStateAbreviation = address.state;
      contact.addressPostalCode = address.postal_code;
      contact.addressCountryAbrevation = address.country;
    }

    if (dto.phone_numbers && dto.phone_numbers.length > 0) {
      contact.phoneNumber = dto.phone_numbers[0].phone_number;
    }

    if (dto.custom_fields) {
      const todayVisitorField = dto.custom_fields.find(
        (field) =>
          field.custom_field_id === '621d9953-371b-4677-9d76-b669a4ffd21b',
      );
      const updatedAtField = dto.custom_fields.find(
        (field) =>
          field.custom_field_id === 'e16a1d58-ca3f-48b4-bd34-acbc49ebca84',
      );

      contact.todayVisitorAttribute = todayVisitorField
        ? Boolean(todayVisitorField.value)
        : false;
      contact.todayVisitorAttributeUpdatedAt = updatedAtField
        ? new Date(updatedAtField.value)
        : new Date();
    }

    return contact;
  }

  /**
   * Maps Contact entity to ConstantContactDTO
   */
  public static toDTO(contact: Contact): ConstantContactDTO {
    const dto: ConstantContactDTO = {
      contact_id: contact.contactId,
      email_address: {
        address: contact.emailAddress,
      },
      first_name: contact.firstName,
      last_name: contact.lastName,
      custom_fields: [
        {
          custom_field_id: '621d9953-371b-4677-9d76-b669a4ffd21b',
          value: contact.todayVisitorAttribute.toString(),
        },
        {
          custom_field_id: 'e16a1d58-ca3f-48b4-bd34-acbc49ebca84',
          value: contact.todayVisitorAttributeUpdatedAt.toString(),
        },
      ],
      street_addresses: [
        {
          street_address_id: '6eb00bd8-4814-4c32-978f-8132aba6c3ad',
          kind: 'Main',
          street: `${contact.addressLine1}$|$${contact.addressLine2}`,
          city: contact.addressCity,
          state: contact.addressStateAbreviation,
          postal_code: contact.addressPostalCode,
          country: contact.addressCountryAbrevation,
        },
      ],
      phone_numbers: [
        {
          phone_number_id: '06208c9b-ca8d-40bf-94f6-802912611c9b',
          kind: 'Main',
          phone_number: contact.phoneNumber,
        },
      ],
    };

    return dto;
  }
}
