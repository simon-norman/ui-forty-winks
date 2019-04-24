
const createAuth = (auth0Instance) => {
  const auth = {

    login() {
      auth0Instance.authorize();
    },

    handleAuthentication() {
      return new Promise((resolve, reject) => {
        auth0Instance.parseHash((err, authResult) => {
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

  return auth
}


export default createAuth;
