import axios from 'axios';
import config from '../config';

const baseApi = axios.create({
  baseURL: config.fortyWinksApi.url,
  responseType: 'json',
});

const messageApi = {
  postMessage: async (message, callback) => {
      try {
        const response = await baseApi.post('/message', message);
        console.log(response.data);
        callback(message)
        // return response.data;

      }  catch(error) {
        console.log(error);
        console.log(error.response)
      }
  }
}

export default messageApi
