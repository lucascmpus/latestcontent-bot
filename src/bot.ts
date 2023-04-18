import axios from 'axios';
import client from './client/tmi';
import { RandomAdvice } from './types';

client.on('message', async (target, context, msg, self) => {
  if (self) {
    return;
  }

  if (msg.trim() === '!advice') {
    let message: RandomAdvice = {} as RandomAdvice;

    await axios.get('https://api.adviceslip.com/advice').then(res => {
      const { slip } = res.data;
      message = slip.advice;
    });

    client.say(target, JSON.stringify(message)).catch(err => console.log(err));
  }

  if (msg.trim() === '!tiktok') {
  }
});

client.on('connected', (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
});

client.connect().catch(console.error);
