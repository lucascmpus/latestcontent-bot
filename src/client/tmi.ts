import dotenv from 'dotenv';
import tmi from 'tmi.js';

dotenv.config();
const client = new tmi.client({
  options: {
    clientId: process.env.ID_CLIENT,
    debug: true,
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: [process.env.CHANNEL_NAME || 'k1nhz'],
});

export default client;
