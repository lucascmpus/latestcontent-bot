import dotenv from 'dotenv';

dotenv.config();

const OptionsTMI = {
  options: {
    clientId: process.env.ID_CLIENT,
    debug: true,
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: [process.env.CHANNEL_NAME || 'k1nhz'],
};

const OptionsTwitter = {
  consumer_key: process.env.CONSUMER_KEY_TWITTER,
  consumer_secret: process.env.CONSUMER_SECRET_TWITTER,
  access_token: process.env.ACCESS_TOKEN_TWITTER,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET_TWITTER,
};

export { OptionsTMI, OptionsTwitter };
