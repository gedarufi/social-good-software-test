import { registerAs } from '@nestjs/config';

const { CLIENT_ID, APPLICATION_SECRET } = process.env;

export default registerAs('constant-contact', () => ({
  clientId: CLIENT_ID,
  applicationSecret: APPLICATION_SECRET,
}));
