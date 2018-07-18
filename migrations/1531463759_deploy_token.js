const VODToken = artifacts.require('VODToken')

module.exports = function (deployer, network) {
  if (network === 'testrpc') return

  const initialAccount = process.env.INITIAL_ACCOUNT
  const initialBalance = parseInt(process.env.INITIAL_BALANCE) * 10 ** 18

  deployer.deploy(VODToken, initialAccount, initialBalance)
}
