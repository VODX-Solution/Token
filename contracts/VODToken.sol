pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract VODToken is StandardToken {
  string public constant name = "VODXs";
  string public constant symbol = "VOD";
  uint8 public constant decimals = 18;

  constructor(address initialAccount, uint256 initialBalance) public {
    balances[initialAccount] = initialBalance;
    totalSupply_ = initialBalance;
  }
}
