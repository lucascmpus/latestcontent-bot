import axios from 'axios';
import { LastVideo } from 'src/types';

async function LastVideo(channelId: string) {
  const response: LastVideo = await axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.CREDENTIALS_YTB}&maxResults=1&channelId=${channelId}&order=date&part=snippet`,
    )
    .then(res => res.data)
    .then(res => res.items)
    .catch(err => console.error(err));
  return response;
}

export default LastVideo;
