import auth0 from 'auth0-js';

const auth0Instance = new auth0.WebAuth({
    domain: 'dev-itjmkjwl.eu.auth0.com',
    clientID: 'cQDWo28WaQ6jGjji65l9pLRy8k6q9vSb',
    redirectUri: 'http://localhost:3000/shelters',
    audience:'https://api-forty-winks.herokuapp.com/',
    responseType: 'token id_token',
    scope: 'openid'
  });

const login = () => {
  auth0Instance.authorize();
}

export default login;