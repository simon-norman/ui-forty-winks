import axios from 'axios';
import config from '../config';

const baseApi = axios.create({
  baseURL: config.fortyWinksApi.url,
  responseType: 'json',
});

const voucherApi = {
  getVoucher: async (code) => {
    try {
       const response = await baseApi.get('/voucher', {params: {
        code: code
      }
    });

      return response.data;
      
    } catch (error) {
      console.log(error);
    }
  },

  postVoucher: async (amount) => {
    try {
       const response = await baseApi.post('/voucher', {amount: amount});
  
      return response.data;

    } catch (error) {
      console.log(error);
    }
  }
}

export default voucherApi;
