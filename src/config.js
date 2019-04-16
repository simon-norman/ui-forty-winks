const config = {
  development: { 
    fortyWinksApi: {
      url: "http://localhost:4000" 
    },
  },

  test: { 
    fortyWinksApi: {
      url: "http://localhost:4000" 
    },
  },
  
  production: { 
    fortyWinksApi: {
      url: "http://localhost:4000" 
    },
  }
}

export default config[process.env.NODE_ENV]