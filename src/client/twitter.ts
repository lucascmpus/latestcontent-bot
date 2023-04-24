import twit, { ConfigKeys } from 'twit';

class Twitter extends twit {
  constructor(cfg: ConfigKeys) {
    super(cfg);
  }
}

export default Twitter;
