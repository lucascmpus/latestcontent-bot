import Twitter from '../../client/twitter';
import { OptionsTwitter } from '../options';

const T = new Twitter(OptionsTwitter);

function getLastTweets(user: string) {
  T.get(
    'statuses/user_timeline',
    { screen_name: 'Mtg_SoulStrong', count: 10 },
    (err, data, response) => {
      if (err) {
        console.error(err);
        return 'err'
      } else {
        // Imprima os tweets
        return JSON.stringify(data);
        console.log(JSON.stringify(data));
      }
    },
  );

  return 'a'
}

export default getLastTweets;
