import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { LoginSuccess } from '../authorisation/LoginSuccess'
import createAuth from '../services/auth'

describe('<LoginSuccess /> spec', () => {
  let auth;
  let stubbedParseHash;
  let stubbedRouteReplace;

  const flushPromises = () => {
    return new Promise(resolve => setImmediate(resolve));
  };

  beforeEach(() => {
    const mockAuthResult = {
      accessToken: 'abcdef',
      expiresIn: 100000
    }

    stubbedParseHash = jest.fn((callback) => {
      callback(null, mockAuthResult)
    })

    const mockAuthInstance = {
      parseHash: stubbedParseHash
    }

    auth = createAuth(mockAuthInstance)

    stubbedRouteReplace = jest.fn()
  })

  it('renders the component', async () => {
    const { getByText, findByText } = render(<LoginSuccess history={{ replace: stubbedRouteReplace }} auth={auth} />)
    await Promise.resolve();
    expect(stubbedParseHash.mock.calls.length).toBe(1)
  })
});