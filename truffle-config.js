const HDWalletProvider = require('@truffle/hdwallet-provider')
const fs = require('fs')
require("dotenv").config();

const MNEMONIC = process.env.MNEMONIC
module.exports = {
  networks: {
    inf_predictionDapp_goerli: {
      network_id: 5,
      gasLimit: 100000000000,

      provider: new HDWalletProvider(
        MNEMONIC,
        "wss://goerli.infura.io/ws/v3/ea0e4b2318fd459fb2688f2ab18e4264"
      ),
    },
  },
  mocha: {},
  compilers: {
    solc: {
      version: "0.8.16",
    },
  },
};
