import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { LoginSuccess } from '../authorisation/LoginSuccess'
import createAuth from '../services/auth'

describe('<LoginSuccess /> spec', () => {
  let auth;
  let stubbedParseHash;
  let stubbedRouteReplace;

  const waitForPromisesToResolve = async () => {
    await Promise.resolve();
  };

  beforeEach(async () => {
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

    const { getByText, findByText } = render(<LoginSuccess history={{ replace: stubbedRouteReplace }} auth={auth} />)
    await waitForPromisesToResolve()
  })

  it('instructs auth0 to extract login details from URL (parse hash)', async () => {
    expect(stubbedParseHash.mock.calls.length).toBe(1)
  })

  it('sets route to "/redemption" once login details extracted', async () => {
    expect(stubbedRouteReplace.mock.calls[0][0]).toBe('/redemption')
  })
});