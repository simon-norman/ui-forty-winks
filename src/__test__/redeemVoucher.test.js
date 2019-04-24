import React from 'react'
import { render, fireEvent } from 'react-testing-library'
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

    stubbedGetCall = jest.fn()
    stubbedPostCall = jest.fn()
    mockBaseApi = {
      get: stubbedGetCall,
      post: stubbedPostCall
    }

    const voucherApi = createVoucherApi(auth, mockBaseApi)

    wrapper = render(<Redemption voucherApi={voucherApi} />)
    await waitForPromisesToResolve()
  })

  it('instructs forty winks to get a voucher when code entered', async () => {
    const input = wrapper.getByTestId('voucher-code-input')
    input.value = 'V12'
    fireEvent.change(input)
    expect(stubbedGetCall.mock.calls.length).toBe(1)
  })
});