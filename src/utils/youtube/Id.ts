import axios from 'axios';
import { IdType } from 'src/types';

const getId = async (username: string): Promise<string | void> => {
  const res: IdType[] = await axios
    .get(
      `https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${username}&key=${process.env.CREDENTIALS_YTB}`,
    )
    .then(res => res.data.items);

  const id = res[0].id;

  return id;
};

export default getId;
