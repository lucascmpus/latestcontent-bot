import axios from 'axios';
import { RandomAdvice } from 'src/types';

export async function GetAdvice() {
  let message: RandomAdvice = {} as RandomAdvice;
  await axios.get('https://api.adviceslip.com/advice').then(res => {
    const { slip } = res.data;
    message = slip.advice;
  });

  return JSON.stringify(message);
}
