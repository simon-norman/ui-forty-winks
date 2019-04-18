import axios from 'axios';
import config from '../config';

const baseApi = axios.create({
  baseURL: config.fortyWinksApi.url,
  responseType: 'json',
});

const voucherApi = {
  getVoucher: async () => {
    try {
      // commented out until API live
      // const response = await baseApi.post('/vouchercode', {amount: 20});
      //

      // stubbing API
      const response = {data: {voucher: {vouchercode: "123456", voucheramount: 20}}}

      return response.data;

    } catch (error) {
      console.log(error);
    }
  }
}

export default voucherApi;
