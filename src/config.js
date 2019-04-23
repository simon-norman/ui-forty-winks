const config = {
  development: { 
    fortyWinksApi: {
      url: "http://localhost:8080" 
    },
    fortyWinksUi: {
      url: "http://localhost:3000" 
    },
  },

  test: { 
    fortyWinksApi: {
      url: "http://localhost:8080" 
    },
    fortyWinksUi: {
      url: "http://localhost:3000" 
    },
  },
  
  production: { 
    fortyWinksApi: {
      url: process.env.REACT_APP_FORTY_WINKS_API_URL
    },
    fortyWinksUi: {
      url: process.env.REACT_APP_FORTY_WINKS_UI_URL
    },
  }
}

export default config[process.env.NODE_ENV]