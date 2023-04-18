import tmi from 'tmi.js';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

interface PostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

let data: PostData[] = [];

// Create a client with our options
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

// Register our event handlers (defined below)
client.on('message', async (target, context, msg, self) => {
  if (self) {
    return;
  }

  if (msg.trim() === '!tiktok') {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => (data = res.data));
    console.log(data);

    let option = data[1]['title'];
    client.say(target, JSON.stringify(option)).catch(err => console.log(err));
  }
});
client.on('connected', (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
});

client.connect().catch(console.error);
