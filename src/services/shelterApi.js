import axios from 'axios';
import config from '../config';

const baseApi = axios.create({
  baseURL: config.fortyWinksApi.url,
  responseType: 'json',
});

const shelterApi = {
  getShelters: async () => {
    try {
      const response = await baseApi.get('/shelters');
      return response.data;
    } catch (error) {
      console.log(error);
      return { shelters: [] };
    }
  }
};

export default shelterApi;
