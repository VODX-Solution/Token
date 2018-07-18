require('dotenv').config()
require('babel-register')
require('babel-polyfill')
require('babel-node-modules')([
  'openzeppelin-solidity'
])

const HDWalletProvider = require('truffle-hdwallet-provider')
const gethRopstenURL = process.env.GETH_ROPSTEN_URL
const gethMainnetURL = process.env.GETH_MAINNET_URL
const mnemonic = process.env.DEPLOYMENT_WALLET_MNEMONIC

module.exports = {
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: '*'
    },
    testrpc: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, gethRopstenURL),
      network_id: 3,
      gas: 4698717
    },
    mainnet: {
      provider: new HDWalletProvider(mnemonic, gethMainnetURL),
      network_id: 1
    }
  }
}
