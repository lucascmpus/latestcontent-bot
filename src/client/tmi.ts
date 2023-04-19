import tmi, { Options } from 'tmi.js';

class Client extends tmi.Client {
  constructor(options: Options) {
    super(options);
  }
}

export default Client;
