// Application Main Config
module.exports = {
  site: {
    // Site configurations on server startup
    enableMaintenanceOnStart: false,
    manualWithdrawsEnabled: false,
    enableLoginOnStart: true,
    // Site endpoints
    backend: {
      productionUrl: "https://api.cupwager.com",
      developmentUrl: "http://localhost:5000",
    },
    frontend: {
      productionUrl: "https://cupwager.com",
      developmentUrl: "http://localhost:8080",
    },
    adminFrontend: {
      productionUrl: "https://admin.cupwager.com",
      developmentUrl: "http://localhost:3000",
    },
  },
  database: {
    developmentMongoURI: "mongodb+srv://kollegian:yassboss95@cluster0.heerrkt.mongodb.net/?retryWrites=true&w=majority", // MongoURI to use in development
    productionMongoURI: "mongodb+srv://kollegian:yassboss95@cluster0.heerrkt.mongodb.net/?retryWrites=true&w=majority", // MongoURI to use in production
  },
  // Each specific game configuration
  games: {
    exampleGame: {
      minBetAmount: 1, // Min bet amount (in coins)
      maxBetAmount: 100000, // Max bet amount (in coins)
      feePercentage: 0.1, // House fee percentage
    },
    race: {
      prizeDistribution: [40, 20, 14.5, 7, 5.5, 4.5, 3.5, 2.5, 1.5, 1], // How is the prize distributed (place = index + 1)
    },
    vip: {
      levels: [
        {
          name: "None",
          wagerNeeded: 0,
          rakebackPercentage: 0,
        },
        {
          name: "Bronze",
          wagerNeeded: 10000,
          rakebackPercentage: 10,
        },
        {
          name: "Silver",
          wagerNeeded: 15000,
          rakebackPercentage: 12,
        },
        {
          name: "Gold",
          wagerNeeded: 20000,
          rakebackPercentage: 14,
        },
        {
          name: "Diamond",
          wagerNeeded: 30000,
          rakebackPercentage: 16,
        },
      ],
    },
    affiliates: {
      earningPercentage: 20, // How many percentage of house edge the affiliator will get
    },
    cups: {
      minBetAmount: 0.1, // Min bet amount (in coins)
      maxBetAmount: 100000, // Max bet amount (in coins)
      feePercentage: 0.05, // House fee percentage
    },
    king: {
      minBetAmount: 0.1, // Min bet amount (in coins)
      maxBetAmount: 100000, // Max bet amount (in coins)
      feePercentage: 0.05, // House fee percentage
      autoChooseTimeout: 30000, // Auto-choser timeout in ms
    },
    shuffle: {
      minBetAmount: 0.1, // Min bet amount (in coins)
      maxBetAmount: 100000, // Max bet amount (in coins)
      feePercentage: 0.05, // House fee percentage
      waitingTime: 30000,
    },
    roulette: {
      minBetAmount: 0.1, // Min bet amount (in coins)
      maxBetAmount: 200, // Max bet amount (in coins)
      feePercentage: 0.02, // House fee percentage
      waitingTime: 30000, // Roulette waiting time in ms
    },
    crash: {
      minBetAmount: 0.1, // Min bet amount (in coins)
      maxBetAmount: 200, // Max bet amount (in coins)
      maxProfit: 1000, // Max profit on crash, forces auto cashout
      houseEdge: 0.04, // House edge percentage
    },
  },
  blochain: {
    // EOS Blockchain provider API root url
    // without following slashes
    httpProviderApi: "http://eos.greymass.com",
  },
  authentication: {
    jwtSecret: "secretstuffrighthereboysfr2005", // Secret used to sign JWT's. KEEP THIS AS A SECRET
    jwtExpirationTime: 360000, // JWT-token expiration time (in seconds)
    twilio: {
      accountSid: "ACd0f293d3b31e78d3df67580d5a10f493",
      authToken: "bd93c1a33af046e20b71c810094b4165",
      verifyServiceSid: "IS408300947cc34048aa46f69d62c3c9cf",
    },
    coinbase: {
      apiKey: "rJySvsJ8NKRoM1r6",
      apiSecret: "XcQfbjLFCQ3gMyrcayEn6AttndABv4zy",
      wallets: {
        btc: "0f535bdf-64bc-59ab-8884-83ebd0826cd4",
        eth: "88e7aaa7-a31e-5050-98e2-fa171e40c2d1",
        ltc: "1796bacb-a61c-5db9-b65e-144a6b21291a",
      },
    },
    reCaptcha: {
      secretKey: "6Lfgnu0jAAAAAP7IhdFimeAocYmQpcKObn4rPKzF",
    },
    googleOauth: {
      clientId: "412873731148-f6k48mp5aqethvte8b7qe68ncjtljnqu.apps.googleusercontent.com",
      clientSecret: "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",
    },
    steam: {
      apiKey: "697FAD319EB3FD983C3CC2D209F39F56", // Your Steam API key
    },
  },
};
