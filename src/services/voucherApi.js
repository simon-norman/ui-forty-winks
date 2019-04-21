import axios from 'axios';
import config from '../config';
import auth from './auth';

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
  },

  redeemVoucher: async(id) => {
    try {
      const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`, 'content-type': 'application/json' }
      console.log(headers)
      const response = await baseApi.post(`private/vouchers/${id}/redemption`, { headers });
      return response.data;
    } catch (error) {
      console.log(error);
   }
  }
}

export default voucherApi;
