import auth0 from 'auth0-js';

const auth0Instance = new auth0.WebAuth({
  domain: 'dev-itjmkjwl.eu.auth0.com',
  clientID: 'cQDWo28WaQ6jGjji65l9pLRy8k6q9vSb',
  redirectUri: 'http://localhost:3000/redemption',
  audience:'https://api-forty-winks.herokuapp.com/',
  responseType: 'token',
});

const auth = {
  accessToken: '',

  login() {
    auth0Instance.authorize();
  },

  handleAuthentication() {
    auth0Instance.parseHash(this.setSession.bind(this))
  },

  setSession(err, authResult) {
    if (authResult && authResult.accessToken) {
      localStorage.setItem('isLoggedIn', 'true');

      let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
      this.accessToken = authResult.accessToken;
      this.expiresAt = expiresAt;
    }
  },

  getAccessToken() {
    return this.accessToken;
  },
}


export default auth;