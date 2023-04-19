import Client from './client/tmi';
import { GetAdvice } from './utils/advice';
import option from './utils/options';

const client = new Client(option);

client.on('message', async (target, context, msg, self) => {
  if (self) {
    return;
  }

  if (msg.trim() === '!advice') {
    client.say(target, await GetAdvice()).catch(err => console.log(err));
  }

  if (msg.trim() === '!tiktok') {
  }
});

client.on('connected', (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
});

client.connect().catch(console.error);
