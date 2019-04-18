const config = {
  development: { 
    fortyWinksApi: {
      url: "http://localhost:8080" 
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