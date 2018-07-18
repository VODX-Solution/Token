import ether from 'openzeppelin-solidity/test/helpers/ether'
import assertRevert from 'openzeppelin-solidity/test/helpers/assertRevert'

const VODToken = artifacts.require('VODToken')

contract('VODToken', (accounts) => {
  const owner = accounts[1]
  const balance = ether(1800000000)

  beforeEach(async function () {
    this.token = await VODToken.new(owner, balance)
  })

  describe('initial balance', async function () {
    it('should assign 1800000000 to owner account', async function () {
      const actualBalance = await this.token.balanceOf(owner)
      assert.equal(balance.toNumber(), actualBalance.toNumber())
    })
  })

  describe('transfers', async function () {
    const target = accounts[2]

    it('should allow an owner to transfer funds', async function () {
      await this.token.transfer(target, ether(20), { from: owner })
      const actualBalance = await this.token.balanceOf(target)
      assert.equal(ether(20).toNumber(), actualBalance.toNumber())
    })

    it('should disallow a non-owner to transfer funds', async function () {
      assertRevert(this.token.transfer(target, ether(20), { from: target }))
    })

    it('should disallow transfers for more than current balance', async function () {
      assertRevert(this.token.transfer(target, ether(1800000001), { from: owner }))
    })
  })
})
