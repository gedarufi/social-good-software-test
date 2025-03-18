export interface ConstantContactDTO {
  contact_id: string;
  email_address: EmailAddress;
  first_name: string;
  last_name: string;
  job_title?: string;
  company_name?: string;
  birthday_month?: number;
  birthday_day?: number;
  anniversary?: Date;
  update_source?: string;
  create_source?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  custom_fields: CustomField[];
  phone_numbers: PhoneNumber[];
  street_addresses: StreetAddress[];
  list_memberships?: string[];
  taggings?: string[];
  notes?: Note[];
  sms_channel?: SMSChannel;
}

export interface CustomField {
  custom_field_id: string;
  value: string;
}

export interface EmailAddress {
  address: string;
  permission_to_send?: string;
  created_at?: Date;
  updated_at?: Date;
  opt_in_source?: string;
  opt_in_date?: Date;
  opt_out_source?: string;
  opt_out_date?: Date;
  opt_out_reason?: string;
  confirm_status?: string;
}

export interface Note {
  note_id: string;
  created_at?: Date;
  content: string;
}

export interface PhoneNumber {
  phone_number_id: string;
  phone_number: string;
  kind: string;
  created_at?: Date;
  updated_at?: Date;
  update_source?: string;
  create_source?: string;
}

export interface SMSChannel {
  sms_channel_id: string;
  sms_address: string;
  dial_code: string;
  country_code: string;
  update_source: string;
  create_source: string;
  sms_channel_consents: SMSChannelConsent[];
}

export interface SMSChannelConsent {
  sms_consent_permission: string;
  consent_type: string;
  opt_in_date?: Date;
  opt_out_date?: Date;
  advertised_frequency: string;
  advertised_interval: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface StreetAddress {
  street_address_id: string;
  kind: string;
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  created_at?: Date;
  updated_at?: Date;
}
