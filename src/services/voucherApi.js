import axios from 'axios';
import config from '../config';

const baseApi = axios.create({
  baseURL: config.fortyWinksApi.url,
  responseType: 'json',
});

const voucherApi = {
  getVoucher: async () => {
    try {
      const response = await baseApi.post('/vouchercode');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default voucherApi;
