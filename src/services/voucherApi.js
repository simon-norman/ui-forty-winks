
const createVoucherApi= (auth, baseApi) => {
  return {
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

    redeemVoucher: async(voucherDetails) => {
      try {
        const headers = { 'Authorization': `Bearer ${auth.getAccessToken()}`, 'content-type': 'application/json' }
        const response = await baseApi.post(`private/voucher/redeem`, voucherDetails, { headers: headers });
        return response.data;
      } catch (error) {
        console.log(error.response);
      }
    }
  }
}

export default createVoucherApi;
