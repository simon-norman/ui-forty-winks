const config = {
  development: { 
    fortyWinksApi: {
      url: "http://localhost:8080" 
    },
  },

  test: { 
    fortyWinksApi: {
      url: "http://localhost:8080" 
    },
  },
  
  production: { 
    fortyWinksApi: {
      url: process.env.REACT_APP_FORTY_WINKS_API_URL
    },
  }
}

export default config[process.env.NODE_ENV]