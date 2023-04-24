import Client from './client/tmi';
import { GetAdvice } from './utils/advice';
import { OptionsTMI } from './utils/options';
import getLastTweets from './utils/twitter';

const client = new Client(OptionsTMI);

client.on('message', async (target, context, msg, self) => {
  if (self) {
    return;
  }

  if (msg.trim() === '!advice') {
    client.say(target, await GetAdvice()).catch(err => console.log(err));
  }

  if (msg.trim() === '!twitter') {
    client.say(target, getLastTweets('k1nha__'));
  }
});

client.on('connected', (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
});

client.connect().catch(console.error);
