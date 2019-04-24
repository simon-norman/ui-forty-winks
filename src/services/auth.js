import auth0 from 'auth0-js';

const auth0Instance = new auth0.WebAuth({
  domain: 'dev-itjmkjwl.eu.auth0.com',
  clientID: 'cQDWo28WaQ6jGjji65l9pLRy8k6q9vSb',
  redirectUri: 'http://localhost:3000/login/success',
  audience:'https://api-forty-winks.herokuapp.com/',
  responseType: 'token',
});

const auth = {
  accessToken: '',

  login() {
    auth0Instance.authorize();
  },

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      auth0Instance.parseHash((err, authResult) => {
        debugger
        if (err || !authResult || !authResult.accessToken) {
          return reject(err)
        }

        localStorage.setItem('isLoggedIn', 'true');
        let expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();
        this.accessToken = authResult.accessToken;
        this.expiresAt = expiresAt;
        resolve()
      })
    })
  },

  getAccessToken() {
    return this.accessToken;
  },
}


export default auth;
