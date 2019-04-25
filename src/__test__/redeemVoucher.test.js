import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { mount } from 'enzyme';
import Redemption from '../redemption/Redemption'
import createAuth from '../services/auth'
import createVoucherApi from '../services/voucherApi';

describe('<LoginSuccess /> spec', () => {
  let mockAccessToken;
  let mockBaseApi;
  let stubbedGetCall;
  let stubbedPostCall;
  let wrapper;

  const waitForPromisesToResolve = async () => {
    await Promise.resolve();
  };

  beforeEach(async () => {
    const auth = createAuth()
    mockAccessToken = 'abc321'
    auth.accessToken = mockAccessToken

    const mockGetVoucherResponse = 
    { data: {
      amount: 1,
      code: 'B13'
    }}
    stubbedGetCall = jest.fn(() => {
      return Promise.resolve(mockGetVoucherResponse)
    })
    stubbedPostCall = jest.fn()
    mockBaseApi = {
      get: stubbedGetCall,
      post: stubbedPostCall
    }

    const voucherApi = createVoucherApi(auth, mockBaseApi)

    wrapper = mount(<Redemption voucherApi={voucherApi} />);
    wrapper.find('.voucher-code input').simulate('change', {
      target: { value: 'VB2' }
    });
    wrapper.find('.get-voucher-details button').simulate('click');
    await waitForPromisesToResolve()
    wrapper.update();
  })

  it('instructs forty winks to get a voucher when code entered', async () => {
    expect(stubbedGetCall.mock.calls[0][1]).toEqual({ params: { code: 2 }})
  })

  it('displays returned voucher amount when code entered', async () => {
    const displayedVoucherAmount = wrapper.find('.amount-left').text()
    expect(displayedVoucherAmount).toEqual("Credit available: £1")
  })

  it('instructs api to redeem voucher for specified amount', async () => {
    wrapper.find('.deduct-amount input').simulate('change', {
      target: { value: 5 }
    });
    wrapper.find('.user-email input').simulate('change', {
      target: { value: 'me@gmail.com' }
    });
    wrapper.find('.submit-deduction button').simulate('click')
    expect(stubbedPostCall.mock.calls[0][1]).toEqual({
      email: 'me@gmail.com',
      code: 2,
      amount: 5
    })
  })
});